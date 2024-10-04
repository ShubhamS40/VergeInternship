const express=require("express")
const { json } = require("sequelize")
const Router = require("./routers/route")
const { sequelize } = require("./config/db")
const app=express()
const port=5000


sequelize.sync({alter:true})
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((err) => {
    console.error('Error syncing the database:', err);
  });
app.use(express.json());

// Middleware to parse URL-encoded data (from forms)
app.use(express.urlencoded({ extended: true }));
app.use("/",Router)

app.get("/get",(req,res)=>{
    res.send("hello shubham")
})

app.listen(port,()=>{
    console.log("server is listening on port :"+port);
    
})