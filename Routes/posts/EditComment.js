const posts = require('../../Modals/posts')

module.exports = async (req,res)=>{
  try {
    let postsInstance = new posts();
    let {commentid,postid,Comment,dateTime} = req.body
    let data = await postsInstance.editComment(req.body);
    res.send('sucess')
  } catch (e) {
    console.log(e);
    res.send(e)
  }
}
