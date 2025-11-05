import express, { response } from "express"
import CORS from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRouter from "./router/authRouter.js"
import profileRouter from "./router/profileRouter.js"
const app = express()
dotenv.config()
app.use(CORS())
app.use(express.json())

app.use(authRouter)
app.use(profileRouter)

mongoose.connect(process.env.mongoPath).then(()=>{
app.listen(3000,()=>{
    console.log(`Server running at port http://localhost:3000`)
})
})
.catch(()=>{
    console.log("Failed to connect Database!!")
})
