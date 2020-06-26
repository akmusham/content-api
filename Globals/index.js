const fs = require('fs')
const normalizedPath = require('path').join(__dirname)

console.log('Loading Global Modules')
console.log('---------------------------------------------')
fs.readdirSync(normalizedPath).forEach(function(file) {
  if (fs.lstatSync(normalizedPath + '/' + file).isDirectory()) {
    console.log("-----------------",file,"--------------------")
    require(normalizedPath + '/' + file)
  }
})
console.log('---------------------------------------------')
