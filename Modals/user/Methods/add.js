module.exports = function (payload) {
  return (async () => {
    try {
      let data = await db.models.users.create(payload);
      console.log(data,'yo?');
      return data;
    } catch (e) {
      throw e
    }
  })()
}
