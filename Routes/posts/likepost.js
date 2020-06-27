const posts = require('../../Modals/posts')

module.exports = async (req,res)=>{
  try {
    let postsInstance = new posts();
    let newlike = {likedBy:req.body.likedBy,dateTime:req.body.dateTime}
    db.models.posts.findOneAndUpdate({ '_id': req.body.postid } , { "$push": { "likes": newlike } }, { 'new': true },function (res,err) {
      if (!err) {
        console.log(res);
        res.send("sucess")
      }else {
        res.send(err)
      }
    })
  } catch (e) {
    console.log(e);
    res.send(e)
  }
}
