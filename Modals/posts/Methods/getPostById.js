module.exports = function (payload) {
  return (async () => {
    try {
      let data = await db.models.posts.find({_id: payload});
      return data;
    } catch (e) {
      throw e
    }
  })()
}
