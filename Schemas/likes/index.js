module.exports = (db, mongoose) => {
  var likesSchema = new mongoose.Schema({
    userid: {type: mongoose.Types.ObjectId},
    postid: {type: mongoose.Types.ObjectId},
    // commentid: {type: mongoose.Types.ObjectId,default: null},
    dateTime: { type: String }
  },
   { collection: 'likes' }
  );
  db.model('likes', likesSchema);
}
