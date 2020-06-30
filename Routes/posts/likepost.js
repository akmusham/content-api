const posts = require('../../Modals/posts')
const likes = require('../../Modals/likes')

module.exports = async (req,res)=>{
  try {
    let postsInstance = new posts();
    let LikeInstance = new likes();
    let checkLike = await db.models.posts.find({'_id': req.body.postid,'likes.userid':req.body.userid})
    if (checkLike.length> 0) {
      // unlike
      let data = await postsInstance.unlike(req.body)
      res.send({data: data,message:'unliked',status: true})
    }else {
      // like
      let newLike = await LikeInstance.like(req.body)
      let insertPostLike = await postsInstance.addlike(req.body.postid,newLike)
      res.send({message:'like',status: true})
    }
  } catch (e) {
    console.log(e);
    res.send(e)
  }
}
