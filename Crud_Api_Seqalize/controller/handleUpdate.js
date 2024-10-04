const { User } = require("../models/userModel");

const handleUpdate=async(req,res)=>{
    const {id}=req.params
    const {First_Name,Last_Name,Contact_No,Email}=req.body
    try {
     const user=await User.findByPk(id)
     if (!user) {
        res.status(500).json({message:"User was not Found in Database",sucess:"false"})
        
     } 
     const updateUser=await user.update({
        First_Name:First_Name,
        Last_Name:Last_Name,
        Contact_No:Contact_No,
        Email:Email
     })
    
     res.status(200).json({updated:"sucessfully",user:updateUser})

    } catch (error) {
        res.status(404).json({message:"it can not be updated internal error"+error,sucess:false})
    }

}

module.exports=handleUpdate