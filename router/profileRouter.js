import express from "express"
import { addEducation, addExpirence, deleteEducation, showProfile, updateProfile } from "../controller/profileController.js";
import { verification } from "../controller/authController.js";
const profileRouter = express.Router();

profileRouter.get("/profile/show",verification,showProfile)
profileRouter.post("/profile/update",verification,updateProfile)
profileRouter.post("/profile/addEducation",verification,addEducation)
profileRouter.post("/profile/addExpirence",verification,addExpirence)
profileRouter.post("/profile/deleteEducation",verification,deleteEducation)

export default profileRouter