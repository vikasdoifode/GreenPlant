import mongoose from "mongoose";

const ecoActionSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  actionType: String,
  description: String,
  proofImage: String,
  points: Number
});

export default mongoose.model("EcoAction", ecoActionSchema);
