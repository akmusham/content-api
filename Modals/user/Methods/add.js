module.exports = function (payload) {
  return (async () => {
    try {
      let data = await db.models.users.create(payload);
      return data;
    } catch (e) {
      throw e
    }
  })()
}
