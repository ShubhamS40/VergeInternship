const { User } = require("../models/userModel");

const handleRemove=async(req,res)=>{
    const {id}=req.params
    try {
        const user=await User.findByPk(id)
        if (!user) {
            res.status(404).json({message:"User Was not Found",sucess:false})
        }
        await user.destroy()
        res.status(200).json({message:"User was deleted Sucessfully",sucess:true})

    } catch (error) {
        res.status(500).json({message:"Something Went Wrong "+error,sucess:false})
    }
}

module.exports=handleRemove