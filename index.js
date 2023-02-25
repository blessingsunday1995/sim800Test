const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const userRoute = require("./routes/Datas")
const authRoute = require("./routes/Auth")

dotenv.config()


mongoose.connect(process.env.MINGO_URL).
then(()=>console.log("DBConnection Successful")).catch((err)=>{
    console.log(err)
})




const port = 5000
const feedback =()=>{
 console.log('Server is Running! on '+ port)
}
app.use(cors()) 
app.use(express.json())
app.use("/api/data",userRoute)
app.use("/api/auth",authRoute)
 

 
app.listen(process.env.PORT ||  port, feedback)