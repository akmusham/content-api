module.exports = function (payload) {
  return (async () => {
    try {
      let data = await db.models.posts.updateOne(
        {'_id': payload.postid,'comments._id': payload._id},
        { "$set": { "comments.$.Comment" : payload.Comment } } );
      return data;
    } catch (e) {
      throw e
    }
  })()
}
