const express=require('express')
const path=require('path')

const User=require('../model/User')


const UserController = require('../controllers/userController')
const router=express.Router()
router.post('/addnew', UserController.addUser);
router.get('/viewusers',UserController.getUser)
router.get('/add',UserController.add)
router.get('/:id',UserController.getUserbyId)
// router.get('/',(req,res)=>{
//     //res.send("User data...")
//     //res.sendFile('templates/viewUser.html')
//     console.log(path.join(__dirname,'templates','viewUser.html'))
//    // res.sendFile(path.join(__dirname,'../templates','viewUser.html'))
//    res.render('users/listUser');

// })
// router.post('/',(req,res)=>{
//     //res.send("User add Record here...")
//     console.log(req.body)
//    User.find()


//     const user=new User({
  
//         fname:req.body.fname,
//         lname:req.body.lname,
//         email:req.body.email,
//         mobile:req.body.mobile
    
//         })
//         user.save().then((data)=>{
//             res.send({
//                 status:200,
//                 message:"Data Inserted",
//                 result:data
//             })
    
//         }).catch((err)=>{
//             console.log(err)
        
//         })
// })

module.exports=router