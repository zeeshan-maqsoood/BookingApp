const mongoose=require("mongoose")
const orderSchema=new mongoose.Schema({
    amount:{
        type:String,
        require:true
    }
},{timestamps:true})


const orderModel= mongoose.model("Orders",orderSchema)

module.exports=orderModel