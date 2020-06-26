const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = async (req, res) => {
  try {
    let {email,pass} = req.body
    global.users.findOne({ email: email}, function (err, doc) {
        if (doc !== null) {
          bcrypt.compare(pass, doc.pass, function(err, result) {
            console.log(result);
            if (result === true) {
              res.status(200).json({
                'status': true,
                'response': 'Authenticated',
                'data': doc
              })
            }else{
              res.status(401).json({
                'status': false,
                'response': 'Invalid pass!'
              })
            }
          });
        }else {
          res.status(401).json({
            'status': false,
            'response': 'Invalid user!'
          })
        }
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      'response': err
    })
  }
}
