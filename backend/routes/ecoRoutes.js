import express from "express";
import { addEcoAction } from "../controllers/ecoController.js";
import { verifyUser } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/", verifyUser, addEcoAction);
export default router;
