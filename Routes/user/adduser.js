const user = require('../../Modals/user')

module.exports = async (req,res)=>{
  try {
    let userInstance = new user();
    let data = await userInstance.add(req.body);
    res.send("sucess")
  } catch (e) {
    console.log(e);
    res.send(e)
  }
}
