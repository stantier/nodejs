const express=require('express')
const path=require('path')
const User=require('../model/User')
const router=express.Router()

router.get('/',(req,res)=>{
    //res.send("User data...")
    //res.sendFile('templates/viewUser.html')
    console.log(path.join(__dirname,'templates','viewUser.html'))
   // res.sendFile(path.join(__dirname,'../templates','viewUser.html'))
   res.render('users/listUser');

})
router.post('/',(req,res)=>{
    //res.send("User add Record here...")
    //console.log(req.body)
    const user=new User({
  
    fname:req.body.fname,
    lname:req.body.lname,
    email:req.body.email,
    mobile:req.body.mobile

    })
    user.save().then((data)=>{
        res.send({
            status:200,
            message:"Data Inserted",
            result:data
        })

    }).catch((err)=>{
        console.log(err)
    
    })
})

module.exports=router