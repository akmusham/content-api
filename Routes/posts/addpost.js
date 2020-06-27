const posts = require('../../Modals/posts')

module.exports = async (req,res)=>{
  try {
    let postsInstance = new posts();
    let data = await postsInstance.addpost(req.body);
    res.send("sucess")
  } catch (e) {
    console.log(e);
    res.send(e)
  }
}
