const likesSchema = require('../likes')
const commentsSchema = require('../comments')
// console.log(commentsSchema);
module.exports = (db, mongoose) => {
  // console.log(Object.keys(mongoose));
  // console.log(mongoose.modelSchemas.likes);
  // console.log(Object.keys(db.base.modelSchemas.likes));
  // let like = new likeSchema()
  // console.log(likesSchema);
  // console.log(mongoose.Schemas);
  var postSchema = new mongoose.Schema({
    postUrl: { type: String },
    postSoundUrl: {type: String },
    postType: { type: String },
    description: {
      type: String
    },
    comments: [mongoose.modelSchemas.comments],
    likes: [mongoose.modelSchemas.likes],
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
