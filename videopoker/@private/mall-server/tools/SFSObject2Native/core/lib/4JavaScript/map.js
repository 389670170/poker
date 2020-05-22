/**
 * @file en/decode map for JavaScript
 * @author lingo(random634@163.com)
 */

let utils = require('../../common/utils')

// __type 可以为如下字符串内容：
// bool, byte, short, int, long, float, double, number, string, {}, []
// 这两个__type比较特殊
// {} - object
// [] - array
// ---------------------
// SFSOBJType    JSType
//  NULL          object
//  BOOL          boolean
//  BYTE          number
//  SHORT         number
//  INT           number
//  LONG          number
//  FLOAT         number
//  DOUBLE        number
//  UTF-STRING    string
//  SFSOBJECT     object
//  SFSARRAY      object

let typeIdMap = {
  null: 0,
  bool: 1,
  byte: 2,
  short: 3,
  int: 4,
  long: 5,
  float: 6,
  double: 7,
  string: 8,
  array_bool: 9,
  array_byte: 10,
  array_short: 11,
  array_int: 12,
  array_long: 13,
  array_float: 14,
  array_double: 15,
  array_string: 16,
  array: 17,
  object: 18,
  class: 19
}

let _commonEncoder = function (key, val, outObj, typeId, indent = 0, inArray = false) {
  let outString = ''

  let tval = val
  /*
  if (typeId === typeIdMap['bool']) {
    tval = val + ' || false'
  } else if (typeId > typeIdMap['bool'] && typeId < typeIdMap['string']) {
    tval = val + ' || 0'
  } else if (typeId === typeIdMap['string']) {
    tval = val + ' || ""'
  }
  */

  if (!inArray) {
    outString += ' '.repeat(indent) + utils.strfmt('if ({0} != null) {\n', tval)
    outString += ' '.repeat(indent + 2) + utils.strfmt('{0}.put("{1}", {2}, {3});\n', outObj, key, tval, typeId)
    outString += ' '.repeat(indent) + utils.strfmt('}\n')
  } else {
    outString += ' '.repeat(indent) + utils.strfmt('if ({0} != null) {\n', tval)
    outString += ' '.repeat(indent + 2) + utils.strfmt('{0}.add({1}, {2});\n', outObj, tval, typeId)
    outString += ' '.repeat(indent) + utils.strfmt('}\n')
  }

  return outString
}

let _commonDecoder = function (key, inObj, outObj, typeId = null, indent = 0, isMid = false) {
  let outString = ''

  let _prefix = ''
  let _outKey = utils.strfmt('["{0}"]', key)

  let _suffix = ''
  /*
  if (typeId === typeIdMap['bool']) {
    _suffix = ' || false'
  } else if (typeId > typeIdMap['bool'] && typeId < typeIdMap['string']) {
    _suffix = ' || 0'
  } else if (typeId === typeIdMap['string']) {
    _suffix = ' || ""'
  } else {
    _suffix = ''
  }
  */

  if (isMid) {
    _prefix = 'let '
    _outKey = ''
    outString += ' '.repeat(indent) + utils.strfmt('{0} = {1}.get("{2}", {3}){4};\n', _prefix + outObj + _outKey, inObj, key, typeId, _suffix)
  } else {
    outString += ' '.repeat(indent) + utils.strfmt('if ({0}.containsKey("{1}")) {\n', inObj, key)
    outString += ' '.repeat(indent + 2) + utils.strfmt('{0} = {1}.get("{2}", {3}){4};\n', _prefix + outObj + _outKey, inObj, key, typeId, _suffix)
    outString += ' '.repeat(indent) + utils.strfmt('}\n')
  }

  return outString
}

let _getEncoder = function (type) {
  if (typeIdMap[type] != null) {
    return function (key, val, outObj, indent = 0, inArray = false) {
      return _commonEncoder(key, val, outObj, typeIdMap[type], indent, inArray)
    }
  } else {
    if (type === 'number') {
      // it's just fit my need, you can change it to fit yours
      return function (key, val, outObj, indent = 0, inArray = false) {
        let outString = ''
        outString += ' '.repeat(indent) + utils.strfmt('if (({0} > (-1 - (1 << 31))) || ({0} < (1 << 31)) || !!({0} % 1)) {\n', val)
        outString += _commonEncoder(key, val, outObj, typeIdMap['double'], indent + 2, inArray)
        outString += ' '.repeat(indent) + '} else {\n'
        outString += _commonEncoder(key, val, outObj, typeIdMap['int'], indent + 2, inArray)
        outString += ' '.repeat(indent) + '};\n'

        return outString
      }
    } else if (type === 'json') {
      return function (key, val, outObj, indent = 0, inArray = false) {
        let outString = ''
        outString += _commonEncoder(key, 'JSON.stringify(' + val + ' || {})', outObj, typeIdMap['string'], indent, inArray)
        return outString
      }
    }
    return null
  }
}

let _getDecoder = function (type) {
  if (typeIdMap[type] != null) {
    return function (key, inObj, outObj, indent = 0, isMid = false) {
      return _commonDecoder(key, inObj, outObj, typeIdMap[type], indent, isMid)
    }
  } else {
    if (type === 'number') {
      return function (key, inObj, outObj, indent = 0, isMid = false) {
        let outString = ''
        let _outKey = '["' + key + '"]'
        if (isMid) {
          _outKey = ''
        }

        outString += ' '.repeat(indent) + utils.strfmt('if ({0}.containsKey("{1}")) {\n', inObj, key)
        outString += ' '.repeat(indent + 2) + utils.strfmt('{0} = {1}.get("{2}") || 0;\n', outObj + _outKey, inObj, key)
        outString += ' '.repeat(indent) + utils.strfmt('}\n')


        return outString
      }
    } else if (type === 'json') {
      return function (key, inObj, outObj, indent = 0, isMid = false) {
        let outString = ''
        let _outKey = '["' + key + '"]'
        if (isMid) {
          _outKey = ''
        }

        outString += ' '.repeat(indent) + utils.strfmt('if ({0}.containsKey("{1}")) {\n', inObj, key)
        outString += ' '.repeat(indent + 2) + utils.strfmt('{0} = JSON.parse({1}.get("{2}") || "{}");\n', outObj + _outKey, inObj, key)
        outString += ' '.repeat(indent) + utils.strfmt('}\n')

        return outString
      }
    }
  }
}

let _getTypeId = function (type) {
  return typeIdMap[type]
}

module.exports = {
  getEncoder: _getEncoder,
  getDecoder: _getDecoder,
  getTypeId: _getTypeId
}
