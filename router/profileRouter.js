import express from "express"
import { addEducation, addExpirence, deleteEducation, showProfile, updateProfile } from "../controller/profileController.js";

const profileRouter = express.Router();

profileRouter.get("/profile/show",showProfile)
profileRouter.post("/profile/update",updateProfile)
profileRouter.post("/profile/addEducation",addEducation)
profileRouter.post("/profile/addExpirence",addExpirence)
profileRouter.post("/profile/deleteEducation",deleteEducation)

export default profileRouter