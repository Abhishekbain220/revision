let mongoose=require("mongoose")
let productSchema=mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    rate:{
        type:Number,
        required:[true,"Rate is Required"]
    }
},{timeStamps:true})

module.exports=mongoose.model("product",productSchema)