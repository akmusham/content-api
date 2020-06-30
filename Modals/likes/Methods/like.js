module.exports = function (payload) {
  return (async () => {
    try {
      let data = await db.models.likes.create(payload);
      return data;
    } catch (e) {
      throw e
    }
  })()
}
