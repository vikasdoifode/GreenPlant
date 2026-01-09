import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  ecoCoins: { type: Number, default: 0 },
  badges: [String],
  role: { type: String, default: "user" }
});

export default mongoose.model("User", userSchema);
