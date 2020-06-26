const fs = require('fs');
const path = require('path')
module.exports = (db, mongoose) => {
  fs.readdir(path.join(__dirname), (err, dir) => {
    dir = dir.filter(element => element != "index.js" );
    dir.forEach(subDir => {
      if (fs.lstatSync(path.join(__dirname,subDir)).isDirectory() && subDir != "plugins") {
        require(path.join(__dirname,subDir))(db, mongoose)
      }
    })
  });
}
