const posts = require('../../Modals/posts')

module.exports = async (req,res)=>{
  try {
    let postsInstance = new posts();
    await db.models.posts.findOneAndUpdate({ '_id': req.body.postid } , { "$push": { "comments": req.body } }, { 'new': true })
    res.send("sucess")
  } catch (e) {
    console.log(e);
    res.send(e)
  }
}
