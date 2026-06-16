import Internship from "../model/internModel.js"
import userModel from "../model/userModel.js"
import hackathon from "../model/hackathon.js"
export const showHackathon = async (req,res,next)=>
{   const {Id} = await req.body
    const Hackathon = await hackathon.findById(Id)
    await res.status(200).json(Hackathon)
}

export const addHackathon = async (req,res,next)=>{
    const details = await req.body
    console.log("something")
    const Hackathon = new hackathon({...details})
    await Hackathon.save()
    await res.status(200).json({message:"new Hackathon added!!"})
}

export const deleteHackathon = async (req,res,next)=>{
    const details = await req.body
    const Hackathon = await hackathon.findOneAndDelete({name:details.name});
    await res.status(200).json(Hackathon)
}
export const applyHackathon = async (req, res, next) => {
  try {
    const { details, hackathonId } = req.body;
    const Hackathon = await hackathon.findById(hackathonId)
     Hackathon.applicants.push({...details})
    await Hackathon.save()
    await res.status(200).json({message:"Applied successfully!!"})
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};
