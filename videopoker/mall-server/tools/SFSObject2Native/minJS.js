let fs = require('fs')
let path = require('path')

let inFile = './output/4JavaScript/BonusInfoCowboyParser.js'
let content = fs.readFileSync(path.join(__dirname, inFile), 'utf8')

console.log(minJS(content))

function minJS (content) {
  let out = content
  let ms = content.match(new RegExp('let (.*) = .*;', 'g'))
  if (ms) {
    let varnameMap = {}
    for (let i = 0; i < ms.length; i++) {
      let mss = ms[i].match(new RegExp('let (.*) ='))
      if (mss) {
        varnameMap[mss[1]] = 1
      }
    }

    let varnames = Object.keys(varnameMap)
    varnames = varnames.sort((a, b) => { return a.length - b.length })
    for (let i = varnames.length - 1; i >= 0; i--) {
      out = out.replace(new RegExp(varnames[i], 'g'), 'v' + i)
    }
  }

  return out
}
