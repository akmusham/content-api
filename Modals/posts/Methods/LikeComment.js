module.exports = function (payload) {
  return (async () => {
    try {
      console.log('payload',payload);
      let data = await db.models.posts.find({_id: payload});
      console.log('data',data);
      return data.comments;
    } catch (e) {
      throw e
    }
  })()
}
