import mongoose from "mongoose";

const treeSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  treeType: String,
  imageUrl: String,
  geoLocation: {
    lat: Number,
    lng: Number
  },
  plantedDate: Date,
  lastWatered: Date,
  healthStatus: String
});

export default mongoose.model("Tree", treeSchema);
