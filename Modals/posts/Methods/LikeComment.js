module.exports = function (payload) {
  return (async () => {
    try {
      let data = await db.models.posts.update({ '_id': payload.postid ,"comments._id": payload.commentid },
       {"$push":{"comments.$.likes": payload}})
      // console.log('data',data);
      return data;
    } catch (e) {
      throw e
    }
  })()
}
