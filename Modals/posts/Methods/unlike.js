module.exports = function (payload) {
  return (async () => {
    try {
      let data = await db.models.posts.updateOne(
        {'_id': payload.postid},
        { $pull: { "likes" : { userid: payload.userid } } } );
      return data;
    } catch (e) {
      throw e
    }
  })()
}
