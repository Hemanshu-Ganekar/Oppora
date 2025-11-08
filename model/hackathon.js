import mongoose from "mongoose"
import userModel from "./userModel.js"

const hackathonSchema = mongoose.Schema({
    name:{
        type:String
    },
    pricepool:{
        type:Number
    },location:{
        type:String
    },
    mail:{
        type:String
    },
    number:{
        type:String
    },
    position:{
        type:String
    },
    expirence:{
        type:Number
    },
    applicants:[
        {
           type:mongoose.Schema.Types.ObjectId,
           ref:userModel
        }
    ]
},{
    timeStamps:true
})

const hackathon = mongoose.model("hackathon",hackathonSchema);
export default hackathon