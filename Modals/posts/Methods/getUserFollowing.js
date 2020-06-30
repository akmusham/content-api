module.exports = function (payload) {
  return (async () => {
    try {
      console.log(payload);
      let data = await db.models.posts.find({"postedBy": payload});
      console.log(data);
      return data;
    } catch (e) {
      throw e
    }
  })()
}
