module.exports = function (payload) {
  return (async () => {
    try {
      let data = await db.models.posts.findOneAndUpdate({ '_id': payload.postid } , { "$push": { "comments": payload } }, { 'new': true })
      return data;
    } catch (e) {
      throw e
    }
  })()
}
