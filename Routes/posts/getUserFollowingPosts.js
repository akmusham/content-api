const posts = require('../../Modals/posts')

module.exports = async (req,res)=>{
  try {
    let postsInstance = new posts();
    let data = await postsInstance.getUserFollowing(req.params.userid);
    res.send(data)
  } catch (e) {
    console.log(e);
    res.send(e)
  }
}
