const express=require("express")
const router=express.Router()
const {createOrder}=require("../Controllers/order")

router.post("/createOrder",createOrder)

module.exports=router