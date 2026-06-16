import express from "express"
import { addHackathon, applyHackathon, deleteHackathon, showHackathon } from "../controller/hackathonController.js"
import { hackathonRecommendationAlgo } from "../controller/hackathonRecommendation.js"


const hackathonRouter = express.Router()

hackathonRouter.get("/hackathon/show",showHackathon)
hackathonRouter.post("/hackathon/add",addHackathon)
hackathonRouter.delete("/hackathon/delete",deleteHackathon)
hackathonRouter.post("/hackathon/apply",applyHackathon)
hackathonRouter.post("/hackathon/recommend",hackathonRecommendationAlgo)

export default hackathonRouter