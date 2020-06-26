var multer = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) //Appending .ext
  }
})

var upload = multer({ storage: storage , limits : {fileSize : 1000000}}).single("file");

module.exports = async (req) => {
  try {
    upload(req, (err) => {
    if(err) {
      res.status(400).send("Something went wrong!");
    }
    return req.file
  });
  } catch (e) {
    console.log(e);
  }
}
