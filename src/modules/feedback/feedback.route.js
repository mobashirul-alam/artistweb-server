import express from "express";
import { feedbackController } from "./feedback.controller.js";
const router = express.Router();

router.get("/", feedbackController.getFeedback);
router.post("/", feedbackController.createFeedback);
router.put("/:id", feedbackController.updateFeedback);
router.delete("/:id", feedbackController.deleteFeedback);

export const feedbackRouter = router;
