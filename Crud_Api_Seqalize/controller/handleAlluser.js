const { User } = require("../models/userModel")

const handleAlluser=async(req,res)=>{
    try {
        const data=await User.findAll()
        res.status(200).json({users:data,result:"sucess"})
    } catch (error) {
        res.status(404).json({sucess:false,result:"Data Not Found Its Internal Error"+error})
    }
}
module.exports=handleAlluser