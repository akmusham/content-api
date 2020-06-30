const posts = require('../../Modals/posts')
const likes = require('../../Modals/likes')

module.exports = async (req,res)=>{
  try {
    let postsInstance = new posts();
    let LikeInstance = new likes();
    let newLike = await LikeInstance.like(req.body)
    let data = await postsInstance.LikeComment(req.body);
    // if (true) {
      // let data = await postsInstance.LikeComment(req.body);
      // res.send('liked')
    // }else{
      // let data = await postsInstance.unlikeComment(req.body);
      // res.send('unliked')
    // }

    console.log('data',data);
    res.send('sucess')
  } catch (e) {
    console.log(e);
    res.send(e)
  }
}
