const fs = require('fs');

class posts {
}

fs.readdirSync(__dirname + "/Methods/").forEach((file) => {
  if (file != 'index.js') {
    let filename = file.replace('.js', '')
    posts.prototype[filename] = require(__dirname + "/Methods/" + filename)
  }
})

module.exports = posts
