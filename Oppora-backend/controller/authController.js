import userModel from "../model/userModel.js"
import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const login = async (req,res,next)=>{
    try {
        const {username,password} = req.body 
        const user = await userModel.findOne({username});

        if(!user){
            return res.status(401).json({
                "message":"Login Failed!!"
            })
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if(isMatch){
           const token = jwt.sign({
            username
           },process.env.secret
           ,{
            expiresIn:"10h"
           })
            return res.status(200).json({
                "message":"Login succcess!!",
                "token":token,
                "userInfo":user
            })
        }

        res.status(401).json({
            "message":"Login Failed!!"
        })
    } catch (error) {
        res.status(500).json({
            "message":"Login Failed!!"
        })
    }
}

export const signin = async (req,res,next)=>{
    let {username,password,email,...info} = req.body
    password= await bcrypt.hash(password,10)
    const user = await userModel({username,password,email,...info})
    await user.save()
    res.status(200).json({
        "message":"Namaste Sir"
    })
}

export const verification = async (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1]
    if(!token){
        res.status(200).json({
        "message":"No token found"
        })
    }else{
        jwt.verify(token,process.env.secret,(err,decode)=>{
         try{
            req.user=decode
            next()
         }catch{
           return res.status(404).json({
               "message":"Invalid Login"
            })
         } 
        })
    }
}

export const test = async (req,res,next)=>{
   let {username,education,expirence} = req.body
   const user = await userModel.findOne({username})
   user.education.push(education[0])
   user.expirence.push(expirence[0])
console.log(user)
   user.save()
}

