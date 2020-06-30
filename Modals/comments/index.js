const fs = require('fs');

class comments {
}

fs.readdirSync(__dirname + "/Methods/").forEach((file) => {
  if (file != 'index.js') {
    let filename = file.replace('.js', '')
    comments.prototype[filename] = require(__dirname + "/Methods/" + filename)
  }
})

module.exports = comments
