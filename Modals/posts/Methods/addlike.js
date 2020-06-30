module.exports = function (postid,payload) {
  return (async () => {
    try {
      let data = await await db.models.posts.findOneAndUpdate({ '_id': postid } , { "$push": { "likes": payload } }, { 'new': true })
      return data;
    } catch (e) {
      throw e
    }
  })()
}
