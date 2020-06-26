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

module.exports = async (req, res,next) => {
  try {
    upload(req, res, (err) => {
    if(err) {
      res.status(400).send("Something went wrong!");
    }
    res.send(req.file);
  });
  } catch (e) {
    console.log(e);
  }
}
