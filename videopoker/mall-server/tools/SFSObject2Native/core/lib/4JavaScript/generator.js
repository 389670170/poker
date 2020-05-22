let fs = require('fs')
let path = require('path')
let assert = require('assert')

let map = require('./map')
let utils = require('../../common/utils')

let _generateMacros = function (data, outputDir, recordFileMap, recordMacro) {
  utils.mkdir(outputDir)

  if (data.__macros != null) {
    if (data.__macros.__namespace == null) {
      console.error('_generateMacros macros has no field __namespace fail.')
      return
    }

    let outputString = ''
    let outputFile = path.join(outputDir, data.__macros.__namespace + '.js')
    if (recordFileMap[outputFile] == null) {
      // the first time access
      recordFileMap[outputFile] = 1
      outputString += '// This is a auto generate file, don\'t change it!\n\n\n'
      outputString += 'module.exports = {}\n\n'

      if (fs.existsSync(outputFile)) {
        fs.truncateSync(outputFile)
      }
    }

    if (recordMacro[data.__macros.__namespace] == null) {
      recordMacro[data.__macros.__namespace] = {}
    }

    if (data.__macros.__defines == null) {
      return
    }

    let dict = data.__macros.__defines
    let keys = Object.keys(dict)
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i]
      let val = dict[key]

      if (recordMacro[data.__macros.__namespace][key] != null) {
        continue
      }
      recordMacro[data.__macros.__namespace][key] = val

      let objString = JSON.stringify(val, null, 2)
      if (typeof val === 'object') {
        let regEx = /"(.*?)":/g
        objString = objString.replace(regEx, '$1:')
      }

      outputString += utils.strfmt('let {0} = {1};\n', key, objString)
      outputString += utils.strfmt('module.exports["{0}"] = {0};\n\n', key)
    }

    fs.appendFileSync(outputFile, outputString)
  }
}

/**
 *
 * @param {any} key
 * @param {any} val
 * @param {any} inObj
 * @param {any} outObj
 * @param {any} indent
 * @param {boolean} [inArray=false]
 * @returns
 */
function _encodeOneField (key, val, inObj, outObj, indent, inArray = false, tagMap = null) {
  let outputString = ''
  let encoder = null
  if (Array.isArray(val)) {
    let _outObj = outObj + '_' + key
    let _outObj_i = _outObj + '_i'
    let _outObj_item = _outObj + '_item'
    encoder = map.getEncoder('array')

    outputString += ' '.repeat(indent) + utils.strfmt('if ({0} != null) {\n', inObj)
    outputString += ' '.repeat(indent + 2) + utils.strfmt('let {0} = new SFS2X.SFSArray();\n', _outObj)
    outputString += ' '.repeat(indent + 2) + utils.strfmt('for (let {0} = 0; {0} < {1}.length; {0}++) {\n', _outObj_i, inObj)
    outputString += ' '.repeat(indent + 4) + utils.strfmt('let {0} = {1}[{2}];\n', _outObj_item, inObj, _outObj_i)

    outputString += _encodeOneField(0, val[0], _outObj_item, _outObj, indent + 4, true, tagMap)
    outputString += ' '.repeat(indent + 2) + '}\n'

    outputString += encoder(key, _outObj, outObj, indent + 2, inArray)
    outputString += ' '.repeat(indent) + '}\n'
  } else if (typeof val === 'object') {
    let _outObj = outObj + '_' + key
    encoder = map.getEncoder('object')

    outputString += ' '.repeat(indent) + utils.strfmt('if ({0} != null) {\n', inObj)
    outputString += ' '.repeat(indent + 2) + utils.strfmt('let {0} = new SFS2X.SFSObject();\n', _outObj)

    let _keys = Object.keys(val)
    for (let i = 0; i < _keys.length; i++) {
      let _key = _keys[i]
      let _val = val[_key]
      let _inObj = inObj + '.' + _key

      outputString += _encodeOneField(_key, _val, _inObj, _outObj, indent + 2, false, tagMap)
    }

    outputString += encoder(key, _outObj, outObj, indent + 2, inArray)
    outputString += ' '.repeat(indent) + '}\n'
  } else {
    let _infos = val.split(',')
    let _type = _infos[0].trim()
    encoder = map.getEncoder(_type)

    if (encoder != null) {
      // outputString += ' '.repeat(indent) + utils.strfmt('if ({0} != null) {\n', inObj)

      outputString += encoder(key, inObj, outObj, indent, inArray)
      if (_infos.length > 1) {
        // store tag
        outputString += ' '.repeat(indent) + utils.strfmt('{0}[{1}] = {2};\n', tagMap, _infos[1].trim(), inObj)
      }

      // outputString += ' '.repeat(indent) + '}\n'
    } else {
      // it's need require other Parser, and it must be a object
      let _outObj = outObj + '_' + key

      outputString += ' '.repeat(indent) + utils.strfmt('if ({0} != null) {\n', inObj)

      let _parser = '__' + _type + 'Parser'
      if (_infos.length > 1) {
        // use tag
        let _enums = _type.split('.')
        assert(_enums.length > 1)
        let _macroFile = _enums[0]
        let _macroType = _enums[1]
        let _macroFileName = '__' + _macroFile
        let _macroTypeName = '__' + _macroType
        _parser = _macroTypeName + 'Parser'

        outputString += ' '.repeat(indent + 2) + utils.strfmt('let {0} = require("./{1}");\n', _macroFileName, _macroFile)
        outputString += ' '.repeat(indent + 2) + utils.strfmt('let {0} = {1}[{2}];\n', _macroTypeName, _macroFileName, _macroType)
        outputString += ' '.repeat(indent + 2) + utils.strfmt('let {0} = require("./" + {1}[{2}["{3}"]] + "Parser");\n', _parser, _macroTypeName, tagMap, _infos[1].trim())
      } else {
        outputString += ' '.repeat(indent + 2) + utils.strfmt('let {0} = require("./{1}");\n', _parser, _type + 'Parser')
      }

      outputString += ' '.repeat(indent + 2) + utils.strfmt('let {0} = {1}.encode({2}, {3});\n', _outObj, _parser, inObj, tagMap)

      if (!inArray) {
        outputString += ' '.repeat(indent + 2) + utils.strfmt('{0}.put("{1}", {2}, {3});\n', outObj, key, _outObj, map.getTypeId('object'))
      } else {
        outputString += ' '.repeat(indent + 2) + utils.strfmt('{0}.add({1}, {2});\n', outObj, _outObj, map.getTypeId('object'))
      }

      outputString += ' '.repeat(indent) + '}\n'
    }
  }

  return outputString
}

/**
 *
 * @param {any} key
 * @param {any} val
 * @param {any} inObj
 * @param {any} outObj
 * @param {any} indent
 * @param {boolean} [inArray=false]
 * @returns
 */
function _decodeOneField (key, val, inObj, outObj, indent, inArray = false, tagMap = null) {
  let outputString = ''
  let decoder = null

  let _inObj = outObj + '_' + key + '_in'
  let _outObj = outObj + '_' + key + '_out'
  if (inArray) {
    _inObj = inObj
    _outObj = outObj
  }

  if (Array.isArray(val)) {
    if (!inArray) {
      decoder = map.getDecoder('array')
      outputString += decoder(key, inObj, _inObj, indent, true)
    }

    let _outObj_i = _outObj + '_i'
    let _outObj_item_in = _outObj + '_item_in'
    let _outObj_item_out = _outObj + '_item_out'

    outputString += ' '.repeat(indent) + utils.strfmt('let {0} = null;\n', _outObj)
    outputString += ' '.repeat(indent) + utils.strfmt('if ({0} != null) {\n', _inObj)
    outputString += ' '.repeat(indent + 2) + utils.strfmt('{0} = [];\n', _outObj)
    outputString += ' '.repeat(indent + 2) + utils.strfmt('for (let {0} = 0; {0} < {1}.size(); {0}++) {\n', _outObj_i, _inObj)

    let typeId = null
    if (Array.isArray(val[0])) {
      typeId = map.getTypeId('array')
    } else if (typeof val[0] === 'object') {
      typeId = map.getTypeId('object')
    } else if (val[0] === 'number') {
      typeId = -1
    } else {
      typeId = map.getTypeId(val[0])
    }

    if (typeId == null) {
      typeId = map.getTypeId('object')
    }

    if (typeId === -1) {
      outputString += ' '.repeat(indent + 4) + utils.strfmt('let {0} = {1}.get({2});\n', _outObj_item_in, _inObj, _outObj_i)
    } else {
      outputString += ' '.repeat(indent + 4) + utils.strfmt('let {0} = {1}.get({2}, {3});\n', _outObj_item_in, _inObj, _outObj_i, typeId)
    }

    if (typeId <= map.getTypeId('string')) {
      outputString += ' '.repeat(indent + 4) + utils.strfmt('let {0} = {1};\n', _outObj_item_out, _outObj_item_in)
    } else {
      outputString += _decodeOneField(0, val[0], _outObj_item_in, _outObj_item_out, indent + 4, true, tagMap)
    }

    outputString += ' '.repeat(indent + 4) + utils.strfmt('{0}.push({1});\n', _outObj, _outObj_item_out)
    outputString += ' '.repeat(indent + 2) + '}\n'
    outputString += ' '.repeat(indent) + '}\n'

    if (!inArray) {
      outputString += ' '.repeat(indent) + utils.strfmt('if ({0} != null) {\n', _outObj)
      outputString += ' '.repeat(indent + 2) + utils.strfmt('{0}["{1}"] = {2};\n', outObj, key, _outObj)
      outputString += ' '.repeat(indent) + utils.strfmt('}\n')
    }
  } else if (typeof val === 'object') {
    if (!inArray) {
      decoder = map.getDecoder('object')
      outputString += decoder(key, inObj, _inObj, indent, true)
    }

    outputString += ' '.repeat(indent) + utils.strfmt('let {0} = null;\n', _outObj)
    outputString += ' '.repeat(indent) + utils.strfmt('if ({0} != null) {\n', _inObj)
    outputString += ' '.repeat(indent + 2) + utils.strfmt('{0} = {};\n', _outObj)

    let _keys = Object.keys(val)
    for (let i = 0; i < _keys.length; i++) {
      let _key = _keys[i]
      let _val = val[_key]

      outputString += _decodeOneField(_key, _val, _inObj, _outObj, indent + 2, false, tagMap)
    }

    outputString += ' '.repeat(indent) + '}\n'

    if (!inArray) {
      outputString += ' '.repeat(indent) + utils.strfmt('if ({0} != null) {\n', _outObj)
      outputString += ' '.repeat(indent + 2) + utils.strfmt('{0}["{1}"] = {2};\n', outObj, key, _outObj)
      outputString += ' '.repeat(indent) + utils.strfmt('}\n')
    }
  } else {
    let _infos = val.split(',')
    let _type = _infos[0].trim()
    decoder = map.getDecoder(_type)
    if (decoder != null) {
      outputString += decoder(key, inObj, outObj, indent)
      if (_infos.length > 1) {
        // store tag
        outputString += ' '.repeat(indent) + utils.strfmt('{0}["{1}"] = {2}["{3}"];\n', tagMap, _infos[1].trim(), outObj, key)
      }
    } else {
      if (!inArray) {
        decoder = map.getDecoder('object')
        outputString += decoder(key, inObj, _inObj, indent, true)
      }
      outputString += ' '.repeat(indent) + utils.strfmt('let {0} = null;\n', _outObj)
      outputString += ' '.repeat(indent) + utils.strfmt('if ({0} != null) {\n', _inObj)

      let _parser = '__' + _type + 'Parser'
      if (_infos.length > 1) {
        // use tag
        let _enums = _type.split('.')
        assert(_enums.length > 1)
        let _macroFile = _enums[0]
        let _macroType = _enums[1]
        let _macroFileName = '__' + _macroFile
        let _macroTypeName = '__' + _macroType
        _parser = _macroTypeName + 'Parser'

        outputString += ' '.repeat(indent + 2) + utils.strfmt('let {0} = require("./{1}");\n', _macroFileName, _macroFile)
        outputString += ' '.repeat(indent + 2) + utils.strfmt('let {0} = {1}["{2}"];\n', _macroTypeName, _macroFileName, _macroType)
        outputString += ' '.repeat(indent + 2) + utils.strfmt('let {0} = require("./" + {1}[{2}["{3}"]] + "Parser");\n', _parser, _macroTypeName, tagMap, _infos[1].trim())
      } else {
        outputString += ' '.repeat(indent + 2) + utils.strfmt('let {0} = require("./{1}");\n', _parser, _type + 'Parser')
      }

      outputString += ' '.repeat(indent + 2) + utils.strfmt('{0} = {1}.decode({2}, {3});\n', _outObj, _parser, _inObj, tagMap)
      outputString += ' '.repeat(indent) + '}\n'

      if (!inArray) {
        outputString += ' '.repeat(indent) + utils.strfmt('if ({0} != null) {\n', _outObj)
        outputString += ' '.repeat(indent + 2) + utils.strfmt('{0}["{1}"] = {2};\n', outObj, key, _outObj)
        outputString += ' '.repeat(indent) + utils.strfmt('}\n')
      }
    }
  }

  return outputString
}

let _generateCommon = function (data, outputDir, recordFileMap) {
  utils.mkdir(outputDir)

  if (data.__common != null) {
    let keys = Object.keys(data.__common)
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i]
      let val = data.__common[key]

      let outputString = ''
      let outputFile = path.join(outputDir, key + 'Parser.js')
      if (recordFileMap[outputFile] == null) {
        // the first time access
        recordFileMap[outputFile] = 1
        outputString += '// This is a auto generate file, don\'t change it!\n\n\n'
        outputString += 'let SFS2X = require("sfs2x-api")\n\n'
        outputString += 'module.exports = {}\n\n'

        if (fs.existsSync(outputFile)) {
          fs.truncateSync(outputFile)
        }
      }

      // common struct proto
      outputString += 'let _encode = function (dataIn, tagMap) {\n'
      let _outObj = key
      let _outObj_tag = _outObj + '_tag'
      let _keys = Object.keys(val)

      outputString += '  let ' + _outObj + ' = new SFS2X.SFSObject();\n'
      outputString += '  let ' + _outObj_tag + ' = tagMap || {};\n'
      for (let i = 0; i < _keys.length; i++) {
        let _key = _keys[i]
        let _val = val[_key]
        let _inObj = 'dataIn.' + _key

        outputString += _encodeOneField(_key, _val, _inObj, _outObj, 2, false, _outObj_tag)
      }
      outputString += '  return ' + _outObj + ';\n'
      outputString += '};\n'
      outputString += 'module.exports["encode"] = _encode;\n\n'

      outputString += 'let _decode = function (dataIn, tagMap) {\n'
      outputString += '  let ' + _outObj + ' = {};\n'
      outputString += '  let ' + _outObj_tag + ' = tagMap || {};\n'
      for (let i = 0; i < _keys.length; i++) {
        let _key = _keys[i]
        let _val = val[_key]

        outputString += _decodeOneField(_key, _val, 'dataIn', _outObj, 2, false, _outObj_tag)
      }
      outputString += '  return ' + _outObj + ';\n'
      outputString += '};\n'
      outputString += 'module.exports["decode"] = _decode;\n\n'

      // write to file
      fs.writeFileSync(outputFile, utils.minJS(outputString))
    }
  }
}

let _generateRPC = function (data, outputDir, recordFileMap) {
  utils.mkdir(outputDir)

  if (data.__rpc != null) {
    let keys = Object.keys(data.__rpc)
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i]
      let val = data.__rpc[key]

      let outputString = ''
      let outputFile = path.join(outputDir, key + 'Parser.js')
      if (recordFileMap[outputFile] == null) {
        // the first time access
        recordFileMap[outputFile] = 1
        outputString += '// This is a auto generate file, don\'t change it!\n\n\n'
        outputString += 'let SFS2X = require("sfs2x-api")\n\n'
        outputString += 'module.exports = {}\n\n'

        if (fs.existsSync(outputFile)) {
          fs.truncateSync(outputFile)
        }
      }

      // deal __req
      if (val.__req != null) {
        let _outObj = key + '_req'
        let _outObj_tag = _outObj + '_tag'
        let _keys = Object.keys(val.__req)

        outputString += 'let _req = {\n'
        outputString += '  encode: function (dataIn, tagMap) {\n'
        outputString += '    let ' + _outObj + ' = new SFS2X.SFSObject();\n'
        outputString += '    let ' + _outObj_tag + ' = tagMap || {};\n'
        for (let i = 0; i < _keys.length; i++) {
          let _key = _keys[i]
          let _val = val.__req[_key]
          let _inObj = 'dataIn.' + _key

          outputString += _encodeOneField(_key, _val, _inObj, _outObj, 4, false, _outObj_tag)
        }
        outputString += '    return ' + _outObj + ';\n'
        outputString += '  },\n\n'

        outputString += '  decode: function (dataIn, tagMap) {\n'
        outputString += '    let ' + _outObj + ' = {};\n'
        outputString += '    let ' + _outObj_tag + ' = tagMap || {};\n'
        for (let i = 0; i < _keys.length; i++) {
          let _key = _keys[i]
          let _val = val.__req[_key]

          outputString += _decodeOneField(_key, _val, 'dataIn', _outObj, 4, false, _outObj_tag)
        }
        outputString += '    return ' + _outObj + ';\n'
        outputString += '  },\n'
        outputString += '}\n'
        outputString += 'module.exports["req"] = _req;\n\n'
      }

      // deal __rsp
      if (val.__rsp != null) {
        let _outObj = key + '_rsp'
        let _outObj_tag = _outObj + '_tag'

        let _keys = Object.keys(val.__rsp)

        outputString += 'let _rsp = {\n'
        outputString += '  encode: function (dataIn, tagMap) {\n'
        outputString += '    let ' + _outObj + ' = new SFS2X.SFSObject();\n'
        outputString += '    let ' + _outObj_tag + ' = tagMap || {};\n'
        for (let i = 0; i < _keys.length; i++) {
          let _key = _keys[i]
          let _val = val.__rsp[_key]
          let _inObj = 'dataIn.' + _key

          outputString += _encodeOneField(_key, _val, _inObj, _outObj, 4, false, _outObj_tag)
        }
        outputString += '    return ' + _outObj + ';\n'
        outputString += '  },\n\n'

        outputString += '  decode: function (dataIn, tagMap) {\n'
        outputString += '    let ' + _outObj + ' = {};\n'
        outputString += '    let ' + _outObj_tag + ' = tagMap || {};\n'
        for (let i = 0; i < _keys.length; i++) {
          let _key = _keys[i]
          let _val = val.__rsp[_key]

          outputString += _decodeOneField(_key, _val, 'dataIn', _outObj, 4, false, _outObj_tag)
        }
        outputString += '    return ' + _outObj + ';\n'
        outputString += '  },\n'
        outputString += '}\n'
        outputString += 'module.exports["rsp"] = _rsp;\n\n'
      }

      // write to file
      fs.writeFileSync(outputFile, utils.minJS(outputString))
    }
  }
}

module.exports = {
  generateMacros: _generateMacros,
  generateCommon: _generateCommon,
  generateRPC: _generateRPC
}
