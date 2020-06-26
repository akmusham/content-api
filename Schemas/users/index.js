const bcrypt = require('bcryptjs');

module.exports = (db, mongoose) => {

  var userSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String
    },
    age: {
      type: Number
    },
    userName: {
      type: String,
      text: true,
      index:true
    },
    followers:[],
    sex: {
      type : String
    },
    profileUrl: { type: String, default: 'http://www.promaxindia.tv/wp-content/uploads/2017/03/no_image_user.png' },
    following: [],
    likes: [],
    generalProfile: {
      address: { type: String, default: 'N.A' },
      contactNumber: { type: Number, default: null }
    },
  },
   { collection: 'users' }
  );

  userSchema.methods.validPassword = function (password) {
    // console.log("password",password);
    return bcrypt.compareSync(password, this.password);
  };

  userSchema.pre('save', function (next) {
    var user = this;
    var SALT_FACTOR = 5;
    if (!user.isModified('password')) {
      return next();
    }
    bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) {
          return next(err);
        } else {
          user.password = hash;
          next();
        }
      });
    });
  });

  db.model('users', userSchema);
}
