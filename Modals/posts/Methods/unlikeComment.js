module.exports = function (payload) {
  return (async () => {
    try {
      let data = await db.models.posts.update({ '_id': payload.postid ,"comments._id": payload.commentid },
       {"$pull":{"comments.$.likes": {userid: payload.userid}}})
      // console.log('data',data);
      return data;
    } catch (e) {
      throw e
    }
  })()
}
