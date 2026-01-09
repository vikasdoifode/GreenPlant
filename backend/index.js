import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import treeRoutes from "./routes/treeRoutes.js";
import challengeRoutes from "./routes/challengeRoutes.js";
import ecoRoutes from "./routes/ecoRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Backend running!");
});

app.use("/api/auth", authRoutes);
app.use("/api/trees", treeRoutes);
app.use("/api/challenges", challengeRoutes);
app.use("/api/eco", ecoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
