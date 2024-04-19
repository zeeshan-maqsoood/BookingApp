const mongoose = require("mongoose");
const config = require("../Config/index");
const connectDB =async () => {
  mongoose.connect(config.development.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  }).then(()=>{
    console.log("Database connected")
  }).catch((error)=>{
    console.log(error)
  })
  
};

module.exports=connectDB
