const user = require('../../Modals/user')

module.exports = async (req,res)=>{
  try {
    console.log(req.body,"holy moly");
    let userInstance = new user();
    // console.log(userInstance);
    let data = await userInstance.add(req.body);
    console.log(data);
    res.send("sucess")
  } catch (e) {
    console.log(e);
    res.send(e)
  }
}
