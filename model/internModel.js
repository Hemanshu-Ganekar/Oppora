import mongoose from "mongoose"
import userModel from "./userModel.js"

const internSchema = mongoose.Schema({
    name:{
        type:String
    },
    stipend:{
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
           ref:userModel,
           unique:true
        }
    ]
},{
    timeStamps:true
})

const Internship = mongoose.model("Intership",internSchema);
export default Internship