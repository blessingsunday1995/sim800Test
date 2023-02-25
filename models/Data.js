const mongoose = require("mongoose")

const DataSchema = new mongoose.Schema(
    {
        voltage:{type:String,required:true,unique:true},
        power:{type:String,required:true,unique:true},
        
    },
    {timestamps:true}
)


module.exports = mongoose.model("Data",DataSchema)