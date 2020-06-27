const bcrypt = require('bcryptjs');

module.exports = (db, mongoose) => {

  var postSchema = new mongoose.Schema({
    postUrl: { type: String },
    postSoundUrl: {type: String },
    postType: { type: String },
    description: {
      type: String
    },
    comments:[],
    likes: [],
    tags: [],
    shares: [],
    postedBy: {type: mongoose.Types.ObjectId},
    dateTime: {type: String},
    postThumbline: {type: String}
  },
   { collection: 'posts' }
  );
  db.model('posts', postSchema);
}
