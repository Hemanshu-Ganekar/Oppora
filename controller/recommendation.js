import natural from "natural";
import cosineSimilarity from "compute-cosine-similarity";
import Intership from "../model/internModel.js";
import userModel from "../model/userModel.js";

export const recommendationAlgo = async (req, res, next) => {
  try {
    const data = req.body;
    const user = await userModel.findOne({ username: data.username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // ---- Handle skills and preferences ----
    let userSkills;
    let prefer;

    if (data.skills) {
      userSkills = data.skills;
      const { skills, username, ...rest } = data;
      prefer = rest;
    } else {
      userSkills = user.skills;
      const { username, ...rest } = data;
      prefer = rest;
    }

    // ---- Fetch internships ----
    const internships = await Intership.find({
      location: { $regex: prefer.location || "", $options: "i" },
    });

    if (!internships.length) {
      return res.status(200).json({ message: "No matching internships found." });
    }

    // ---- Prepare job descriptions ----
    const jobs = internships.map(inter => inter.position);

    // ---- TF-IDF + Cosine Similarity ----
    const tfidf = new natural.TfIdf();
    const allDocs = [userSkills, ...jobs];
    allDocs.forEach(doc => tfidf.addDocument(doc));

    // Build a global vocabulary
    const vocabulary = tfidf.documents
      .flatMap(doc => Object.keys(doc))
      .filter((v, i, a) => a.indexOf(v) === i);

    // Vector builder
    const getVector = (index) => vocabulary.map(word => tfidf.tfidf(word, index));

    const userVector = getVector(0);

    // ---- Compute similarity scores ----
    const jobScores = internships.map((inter, i) => {
      const jobVector = getVector(i + 1);
      const score = cosineSimilarity(userVector, jobVector) || 0;
      return {
        _id: inter._id,
        name: inter.name,
        position: inter.position,
        location: inter.location,
        stipend: inter.stipend,
        expirence: inter.expirence,
        score: score
      };
    });

    // ---- Sort and return ----
    jobScores.sort((a, b) => b.score - a.score);

    console.log("Top Job Recommendations:");
    jobScores.forEach(j =>
      console.log(`${j.position} (${j._id}) → Score: ${j.score.toFixed(2)}`)
    );

    res.status(200).json({ recommendations: jobScores });
  } catch (error) {
    console.error("Error in recommendationAlgo:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};
