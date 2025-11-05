import userModel from "../model/userModel.js"

export const updateProfile = async (req,res,next)=>{
    const {username,...updatedInfo} = await req.body
    let user = await userModel.findOneAndUpdate({username},{$set:updatedInfo},{new:true})
    res.status(200).json(user)
}

export const showProfile = async (req,res,next)=>{
    const {username} = await req.body
    const user = await userModel.findOne({username})
    res.status(200).json(user)
}

export const addEducation = async (req,res,next)=>{
    const {username,toadd} = req.body
    const user = await userModel.findOneAndUpdate({username},{
        $push:{
            education:{$each:toadd}
        }
    },
    {new:true}
    )
    res.status(200).json(user)
}


export const addExpirence = async (req,res,next)=>{
    const {username,toadd} = req.body
    const user = await userModel.findOneAndUpdate({username},{
        $push:{
            expirence:{$each:toadd}
        }
    },
    {new:true}
    )
    res.status(200).json(user)
}

export const deleteEducation = async (req,res,next)=>{
    const {username,instituteName} = req.body
    let user = await userModel.findOne({username})
   let newEducation = await  user.education.filter((ed)=>{
     return ed.instituteName!=instituteName;
    })

    user.education=await newEducation
    await user.save()
    console.log(newEducation,instituteName)
    res.status(200).json(user)
}

export const deleteExpirence = async (req,res,next)=>{
    const {username,instituteName} = req.body
    let user = await userModel.findOne({username})
   let newExpirence = await  user.expirence.filter((ed)=>{
     return ed.instituteName!=instituteName;
    })

    user.expirence=await newExpirence
    await user.save()
    console.log(newExpirence,instituteName)
    res.status(200).json(user)
}