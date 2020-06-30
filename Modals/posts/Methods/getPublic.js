module.exports = function (payload) {
  return (async () => {
    try {
      let data = await db.models.posts.find({"postType": "public"});
      return data;
    } catch (e) {
      throw e
    }
  })()
}
