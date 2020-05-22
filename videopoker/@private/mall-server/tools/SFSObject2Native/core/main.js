/**
 * @file this is a test file
 * @author lingo(random634@163.com)
 */

let path = require('path')
let preProcess = require('./preprocess')
let generator = require('./generator')

let protoFile = path.join(__dirname, '../proto/test_proto.json')
let outputDir = path.join(__dirname, '../output')

if (process.argv[2] === 'clear') {
  generator.clear()
} else {
  if (process.argv[2] != null) {
    protoFile = process.argv[2]
  }
  if (process.argv[3] != null) {
    outputDir = process.argv[3]
  }

  preProcess.preprocess(protoFile, (data, file) => {
    try {
      let jsObj = JSON.parse(data)
      generator.generate(jsObj, outputDir)
    } catch (e) {
      console.error(`Parse file ${file} error: `)
      let eMsg = e.message
      let ms = eMsg.match(/position ([0-9]*)/)
      if (ms && ms[1]) {
        console.error(e.message)
        let pos = parseInt(ms[1])
        let posPad = 100
        let posFrom = Math.max(0, pos - posPad)
        let posTo = Math.min(data.length, pos + posPad)
        console.log(data.substring(posFrom, posTo))
      } else {
        console.error(eMsg)
      }
    }
  })
}
