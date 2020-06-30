
module.exports = (db, mongoose) => {

  var commentsSchema = new mongoose.Schema({
	   postid: {type: mongoose.Types.ObjectId},
    CommentBy: {type: mongoose.Types.ObjectId},
    Comment: {type: String},
    likes: [],
    dateTime: {type: String}
}
,
   { collection: 'comments' }
  );
  db.model('comments', commentsSchema);
}
