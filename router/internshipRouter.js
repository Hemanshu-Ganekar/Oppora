import express from "express"
import { addInternship, applyInternship, deleteInternship, showIntership } from "../controller/employerController.js"
import { recommendationAlgo } from "../controller/recommendation.js"
import { verification } from "../controller/authController.js"

const internship = express.Router()

internship.get("/internship/show",showIntership)
internship.post("/internship/add",addInternship)
internship.delete("/internship/delete",deleteInternship)
internship.get("/internship/recommend",verification,recommendationAlgo)
internship.get("/internship/find",verification,recommendationAlgo)
internship.post("/internship/apply",applyInternship)
export default internship 