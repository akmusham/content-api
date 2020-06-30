const posts = require('../../Modals/posts')
const comments = require('../../Modals/comments')

module.exports = async (req,res)=>{
  try {
    let postsInstance = new posts();
    let commentsInstance = new comments();
    let NewComment = await commentsInstance.add(req.body)
    let data = await postsInstance.addComments(NewComment)
    res.send("sucess")
  } catch (e) {
    console.log(e);
    res.send(e)
  }
}
