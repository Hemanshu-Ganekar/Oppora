import Internship from "../model/internModel.js"
import userModel from "../model/userModel.js"
export const showIntership = async (req,res,next)=>
{   const {name} = await req.body
    const intership = await Internship.findOne({name:name})
    await res.status(200).json(intership)
}

export const addInternship = async (req,res,next)=>{
    const details = await req.body
    const intership = new Internship({...details})
    await intership.save()
    await res.status(200).json({message:"new Intership added!!"})
}

export const deleteInternship = async (req,res,next)=>{
    const details = await req.body
    const internship = await Internship.findOneAndDelete({name:details.name});
    await res.status(200).json(internship)
}
export const applyInternship = async (req, res, next) => {
  try {
    const { username, internId } = req.body;

    const internship = await Internship.findById(internId);
    if (!internship) return res.status(404).json({ message: "Internship not found" });

    const applicant = await userModel.findOne({ username });
    if (!applicant) return res.status(404).json({ message: "User not found" });

    internship.applicants.push(applicant._id);
    await internship.save();

    res.status(200).json({ message: "Applied successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};
