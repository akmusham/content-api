const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = async (req, res) => {
  try {
    if (req.body.email !== '' && req.body.pass !== '') {
      bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(req.body.pass, salt, function(err, hash) {
          req.body.pass = hash
          global.users.insert(req.body)
            res.status(200).json({
              'status': true,
              'response': 'user added'
            })
          });
      });
    }else{
      res.status(401).json({
        'status': false,
        'response': 'user and pass required'
      })
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      'response': err
    })
  }
}
