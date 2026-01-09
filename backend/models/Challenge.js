import mongoose from "mongoose";

const challengeSchema = new mongoose.Schema({
  title: String,
  description: String,
  startDate: Date,
  endDate: Date,
  participants: [mongoose.Schema.Types.ObjectId]
});

export default mongoose.model("Challenge", challengeSchema);
