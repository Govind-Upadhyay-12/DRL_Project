const express=require("express");
const router=express.Router()
const form =require("./form")



router.use('/api/admin',form)

module.exports=router

