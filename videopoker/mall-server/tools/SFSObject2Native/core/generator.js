/**
 * @file do the processing of protocol JSON data
 * @author lingo(random634@163.com)
 */

let fs = require('fs')
let path = require('path')
let utils = require('./common/utils')

let _outputDir = __dirname

let _recordFileMapPath = path.join(__dirname, '../record/fileMapRecord.json')
let _recordFileMap = {}

let _recordMacroPath = path.join(__dirname, '../record/macroRecord.json')
let _recordMacro = {}

/**
 * remove the file of _recordFileMap info
 */
let _doClear = function () {
  if (fs.existsSync(_recordFileMapPath)) {
    fs.unlinkSync(_recordFileMapPath)
  }

  if (fs.existsSync(_recordMacroPath)) {
    fs.unlinkSync(_recordMacroPath)
  }
}

/**
 * do the producing of native encoder, decoder
 * @param {*} data
 * @param {*} outputDir
 * @param {*} outputLang native language type
 */
let _doGenerate = function (data, outputDir, outputLang = 'JavaScript') {
  _outputDir = outputDir

  utils.mkdir(path.dirname(_recordFileMapPath))
  utils.mkdir(path.dirname(_recordMacroPath))
  utils.mkdir(_outputDir)

  if (fs.existsSync(_recordFileMapPath)) {
    let data = fs.readFileSync(_recordFileMapPath)
    _recordFileMap = JSON.parse(data)
  }

  if (fs.existsSync(_recordMacroPath)) {
    let data = fs.readFileSync(_recordMacroPath)
    _recordMacro = JSON.parse(data)
  }

  let generator = null
  switch (outputLang) {
    case 'C++': {
      // todo
      _outputDir = path.join(_outputDir, '4C++')
      break
    }
    case 'JavaScript': {
      _outputDir = path.join(_outputDir, '4JavaScript')
      generator = require('./lib/4JavaScript/generator')
      break
    }
    case 'Java': {
      // todo
      _outputDir = path.join(_outputDir, '4Java')
      break
    }
  }

  if (generator != null) {
    generator.generateMacros(data, _outputDir, _recordFileMap, _recordMacro)
    generator.generateCommon(data, _outputDir, _recordFileMap)
    generator.generateRPC(data, _outputDir, _recordFileMap)
  }

  fs.writeFileSync(_recordFileMapPath, JSON.stringify(_recordFileMap, null, 2))

  fs.writeFileSync(_recordMacroPath, JSON.stringify(_recordMacro, null, 2))
}

module.exports = {
  clear: _doClear,
  generate: _doGenerate
}
