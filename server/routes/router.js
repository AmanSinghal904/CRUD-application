const express = require("express");
const router = express.Router();
const users = require("../models/userSchema")


// router.get("/",(req,res)=>{
//     console.log("connect");
// });
router.post("/register",async(req,res)=>{
    // console.log(req.body);
    const {name,email,age,mobile,work,address,desc}= req.body;

    if(!name||!email|| !age||!mobile||!work||!address||!desc){
        res.status(404).json("please fill the data");
    }
    try {
        
        const preuser = await users.findOne({email:email});
        console.log(preuser);

        if(preuser){
            res.status(404).json("this user is already present");
            
        }else{
            const adduser = new users({
                name,email,age,mobile,work,address,desc
            });
            await adduser.save();
            res.status(201).json(adduser)
            console.log(adduser);
        }

    } catch (error) {
        res.status(404).json(error)
    }
})



module.exports=router;