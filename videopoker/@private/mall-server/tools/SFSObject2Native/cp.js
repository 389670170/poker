let fs = require('fs')
let path = require('path')
let crypto = require('crypto')
let utils = require('./core/common/utils')

let from = path.join(__dirname, './output')
let to = path.join(__dirname, '../../assets/scripts/net-msg')

if (process.argv[2] != null) {
  from = path.join(__dirname, process.argv[2])
}
if (process.argv[3] != null) {
  to = path.join(__dirname, process.argv[3])
}

utils.mkdir(to)

let toFilesMap = {}
utils.walkdir(from, (fromFile) => {
  let toFile = fromFile.replace(from, to)
  if (fs.statSync(fromFile).isDirectory()) {
    utils.mkdir(toFile)
    return
  }

  toFilesMap[toFile] = 1

  let needCp = true
  if (fs.existsSync(toFile)) {
    let srcData = fs.readFileSync(fromFile)
    let srcMD5 = crypto.createHash('md5').update(srcData).digest('hex')

    let tarData = fs.readFileSync(toFile)
    let tarMD5 = crypto.createHash('md5').update(tarData).digest('hex')

    if (srcMD5 === tarMD5) {
      needCp = false
    }
  }

  if (needCp) {
    console.log('copyFile: ' + path.basename(fromFile) + ', ' + path.basename(toFile))
    fs.writeFileSync(toFile, fs.readFileSync(fromFile))
  }
})

// 清理无用文件
utils.walkdir(to, (toFile) => {
  if (toFilesMap[toFile] == null) {
    if (path.extname(toFile) === '.meta') {
      return
    }
    if (!fs.statSync(toFile).isDirectory()) {
      fs.unlinkSync(toFile)
      console.log('delete file: ' + path.basename(toFile))
    }
  }
})
