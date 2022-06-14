const User=require('../model/User')


exports.add= async(req,res)=>{
    res.render('addUser')
}
exports.addUser = async (req, res) => {
    console.log(req.body)
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
}

exports.getUser= async (req,res)=>{
   

   await User.find().then(data=>{
      

        res.json({
            status:200,
            msg:"Data fetched Successfully",
            res:data

        })
       
    }).catch(err=>{
        console.log(err)
    })

}

exports.getUserbyId= async (req,res)=>{
console.log(req.params.id)
let id=req.params.id
    await User.findById(id).then(data=>{
        console.log(data)

        res.json({
            status:200,
            msg:"User fetched Successfully",
            res:data

        })
    }).catch(err=>{
        console.log(err)
    })
}