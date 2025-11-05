import { Router } from "express";
import { login, signin, test, verification } from "../controller/authController.js";
const authRouter = Router();

authRouter.post("/login",login)
authRouter.post("/signin",signin)
authRouter.post("/protected",verification,test)


export default authRouter