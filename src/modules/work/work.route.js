import express from "express";
import { workController } from "./work.controller.js";
const router = express.Router();

router.get("/", workController.getWork);
router.post("/", workController.createWork);
router.put("/:id", workController.updateWork);
router.delete("/:id", workController.deleteWork);

export const workRouter = router;
