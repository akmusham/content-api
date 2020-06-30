const fs = require('fs');

class likes {
}

fs.readdirSync(__dirname + "/Methods/").forEach((file) => {
  if (file != 'index.js') {
    let filename = file.replace('.js', '')
    likes.prototype[filename] = require(__dirname + "/Methods/" + filename)
  }
})

module.exports = likes
