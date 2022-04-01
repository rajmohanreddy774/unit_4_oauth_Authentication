

const express = require("express")
const user=require("../models/user.model")
const router = express.Router();
const {generateToken}=require("./auth.controller")
const authenticate=require("../middlewares/authenticate")

router.get("", async (req, res) => {
    try{
        const product = await user.find()
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

router.post("", async(req, res)=>{
    try {
        const item=await user.findOne({email:req.body.email})

        if(!item)
        return res.status(400).send({message: "user already registered"})
        const User= await user.create(req.body)
        const token=generateToken(User)
        return res.status(200).send({User,token})
    } catch (error) {
        return res.status(400).send({message:error.message})
    }
})

router.patch("", async(req, res)=>{

    try {
        req.user = decoded.user;
        const User=await user.findByIdAndUpdate(req.user._id,req.body,{new:true})
        const token=generateToken(User)
        return res.status(200).send({User,token})
    } catch (error) {
        return res.status(400).send({message:error.message})
 }
 })




module.exports = router;