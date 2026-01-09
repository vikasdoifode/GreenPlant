import express from "express";
import { addTree, getUserTrees } from "../controllers/treeController.js";
import { verifyUser } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/", verifyUser, addTree);
router.get("/", verifyUser, getUserTrees);
export default router;
