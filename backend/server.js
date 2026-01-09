import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import treeRoutes from "./routes/treeRoutes.js";
import ecoRoutes from "./routes/ecoRoutes.js";
import challengeRoutes from "./routes/challengeRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);

app.use("/api/auth", authRoutes);
app.use("/api/trees", treeRoutes);
app.use("/api/eco", ecoRoutes);
app.use("/api/challenges", challengeRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
