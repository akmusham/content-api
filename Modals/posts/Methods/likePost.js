module.exports = function (payload) {
  return (async () => {
    try {
      let data = await db.models.posts.findOneAndUpdate({ '_id': req.body.postid } , { "$push": { "likes": newlike } }, { 'new': true })
      return data;
    } catch (e) {
      throw e
    }
  })()
}
