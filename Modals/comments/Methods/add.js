module.exports = function (payload) {
  return (async () => {
    try {
      let data = await db.models.comments.create(payload);
      return data;
    } catch (e) {
      throw e
    }
  })()
}
