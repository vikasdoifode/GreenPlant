import express from "express";
import { createChallenge, joinChallenge } from "../controllers/challengeController.js";
import { verifyUser } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/", createChallenge);
router.post("/join/:id", verifyUser, joinChallenge);
export default router;
