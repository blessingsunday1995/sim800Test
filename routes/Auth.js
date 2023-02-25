
const router = require("express").Router()
const User = require("../models/Data")


//REGISTER
router.post("/register", async(req,res)=>{
    const newData = new User({
           voltage: req.body.voltage,
            power: req.body.power,

        
    })
    try{ 
          const saveData= await newData.save()
      
          
   
              res.json(saveData)
    }catch(err){
        // res.json(err)
         res.json({error:err})
    } 
  
})


//LOGIN
// router.post("/login", async(req,res)=>{
//     try{ 
//           const user= await User.findOne({email:req.body.email})
//            if(!user) return res.json({error:"User Does not Exist"})

//           const hashPassword = CryptoJS.AES.decrypt(
//             user.password,
//             process.env.PASS_SEC
//             )
 
//             const Userpassword= hashPassword.toString(CryptoJS.enc.Utf8)
//             if(Userpassword !== req.body.password) return res.json({error:"Wrong Password"})

//             const accessToken = jwt.sign(
//                 {
//                     id: user._id,
//                     isAdmin:user.isAdmin
//                 },
//                 process.env.JWT_SEC,
//                 {expiresIn:"3d"}
//             )


//             const {password,...others} = user._doc
   
//               res.json({...others,accessToken})
//     }catch(error){
//        res.json(error)
//     }
   
// })


module.exports=router