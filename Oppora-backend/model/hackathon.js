import mongoose from "mongoose"
import userModel from "./userModel.js"

const hackathonSchema = mongoose.Schema({
     title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
    registrationFee:{
        type:String,
        required:true
    },
    organizer: {
        type: String, 
        required: true,
    },

    mode: {
        type: String,
        enum: ["online", "offline", "hybrid"],
        required: true,
    },

    location: {
        type: String, 
    },

    startDate: {
        type: Date,
        required: true,
    },

    endDate: {
        type: Date,
        required: true,
    },

    registrationDeadline: {
        type: Date,
        required: true,
    },

    entryType: {
        type: String,
        enum: ["individual", "team"],
        default: "individual",
    },

    maxTeamSize: {
        type: Number,
        default: 1, 
    },

    prizes: {
        type: [String], 
    },

    website: {
        type: String,
    },

    tags: {
        type: [String], 
    },

    applicants: [
        {
            teamName:{
                type:String
            },
            teamMembers:[{
                name:String,
                email:String,
                mobileNumber:String,
                college:String,
                course:String
            }]
        }
    ],
},{
    timeStamps:true
})

const hackathon = mongoose.model("hackathon",hackathonSchema);
export default hackathon