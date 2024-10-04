const express=require("express")
const { handleSignup } = require("../controller/handleSignup")
const handleAlluser = require("../controller/handleAlluser")
const handleUpdate = require("../controller/handleUpdate")
const handleRemove = require("../controller/handleRemove")
const Router=express.Router()

// Create Route
Router.post("/signup",handleSignup)



// Read Route
Router.get("/users",handleAlluser)

// Update Route
Router.put("/update/:id",handleUpdate)


// Delete
Router.delete("/remove/:id",handleRemove)



module.exports=Router