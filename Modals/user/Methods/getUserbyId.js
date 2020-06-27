module.exports = function (userid) {
  return (async () => {
    try {
      let data = await db.models.users.find({_id: userid})
      return data;
    } catch (e) {
      throw e
    }
  })()
}
