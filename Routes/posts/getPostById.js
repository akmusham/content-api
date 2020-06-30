const posts = require('../../Modals/posts')

module.exports = async (req,res)=>{
  try {
    let postsInstance = new posts();
    let postId = req.query.id
    let data = await postsInstance.get(postId);
    res.send(data)
  } catch (e) {
    console.log(e);
    res.send(e)
  }
}
