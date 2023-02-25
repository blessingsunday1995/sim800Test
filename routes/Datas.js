const router = require("express").Router()
const User = require("../models/Data")


//UPDATE
// router.put("/:id", async(req,res)=>{
//     if(req.body.password){
//         req.body.password= CryptoJS.AES.encrypt(
//             req.body.password,
//             process.env.PASS_SEC
//             ).toString() 
//     }
//     try{
//         const updateduser = await User.findByIdAndUpdate(req.params.id,
//             {
//             $set:req.body
//         },
//         {new:true}
//         )
//         res.json(updateduser)
//     }catch(err){
//         res.json(err)
//     }
// })




//DELETE
router.delete("/:id", async(req,res)=>{
    
    try{
       await User.findByIdAndDelete(req.params.id)
         res.json("User has been deleted")
    }catch(err){
        res.json(err)
    }
})


//GET USER
router.get("/find/:id", async(req,res)=>{
    try{
       const data= await User.findById(req.params.id)

   
        res.json(data)
    }catch(err){
        res.json(err)
    }
})


//GET ALL USER
router.get("/", async(req,res)=>{
    const query = req.query.new
    try{
       const users= query? await User.find().sort({_id:-1}).limit(1) 
       : await User.find()
   
        res.json(users)
    }catch(err){
        res.json(err)
    }
})






module.exports=router