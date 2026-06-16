// import { TfIdf } from "natural";
// import cosineSimilarity from "compute-cosine-similarity";
// import hackathon from "../model/hackathon.js";
// import userModel from "../model/userModel.js";

export const hackathonRecommendationAlgo = async (req, res) => {
//   try {
//     console.log("REQ BODY:", req.body);

//     const { username, skills, location, mode } = req.body;

//     const user = await userModel.findOne({ username });
//     if (!user) {
//       return res.status(200).json({ recommendations: [] });
//     }

//     let userSkills = skills ?? user.skills ?? "";

//     if (Array.isArray(userSkills)) {
//       userSkills = userSkills.join(" ");
//     } else if (typeof userSkills === "object") {
//       userSkills = Object.values(userSkills).join(" ");
//     } else if (typeof userSkills !== "string") {
//       userSkills = "";
//     }

//     const hackathons = await hackathon.find({
//       location: { $regex: location || "", $options: "i" },
//       mode: { $regex: mode || "", $options: "i" },
//     });

//     if (!hackathons.length) {
//       return res.status(200).json({ recommendations: [] });
//     }

//     const hackathonDocs = hackathons.map(h =>
//       `${h.title} ${h.description} ${(h.tags || []).join(" ")}`
//     );

//     const tfidf = new TfIdf();
//     [userSkills, ...hackathonDocs].forEach(doc => tfidf.addDocument(doc));

//     const vocabulary = tfidf.documents.flatMap(doc =>
//       Object.keys(doc)
//     );

//     const getVector = index =>
//       vocabulary.map(word => tfidf.tfidf(word, index));

//     const userVector = getVector(0);

//     const isZeroVector = v => v.every(x => x === 0);

//     const results = hackathons.map((h, i) => {
//       const hackVector = getVector(i + 1);

//       const score =
//         !isZeroVector(userVector) &&
//         !isZeroVector(hackVector) &&
//         typeof cosineSimilarity === "function"
//           ? cosineSimilarity(userVector, hackVector) || 0
//           : 0;

//       return {
//         _id: h._id,
//         title: h.title,
//         description: h.description,
//         mode: h.mode,
//         location: h.location,
//         startDate: h.startDate,
//         endDate: h.endDate,
//         prizes: h.prizes,
//         tags: h.tags,
//         score,
//       };
//     });

//     results.sort((a, b) => b.score - a.score);

//     res.status(200).json({ recommendations: results });

//   } catch (error) {
//     console.error("HACKATHON RECOMMENDER ERROR:", error);
//     res.status(500).json({ recommendations: [] });
//   }
};
