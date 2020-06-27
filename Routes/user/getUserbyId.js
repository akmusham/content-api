const user = require('../../Modals/user')

module.exports = async (req,res)=>{
  try {
    let userInstance = new user();
    let {userid} = req.body
    let data = await userInstance.getUserbyId(userid)
    res.send(data)
  } catch (e) {
    console.log(e);
    res.send(e)
  }
}
