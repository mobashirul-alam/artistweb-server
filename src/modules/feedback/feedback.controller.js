import FeedbackModel from "./feedback.model.js";

async function createFeedback(req, res) {
    try {
        const feedback = req.body;
        const newFeedback = new FeedbackModel(feedback);
        await newFeedback.save();
        res.status(201).json(newFeedback);
    } catch (error) {
        res.status(500).json({ message: "Error creating feedback", error });
    }
}

async function getFeedback(req, res) {
    try {
        const feedback = await FeedbackModel.find({}).sort({ createdAt: -1 });
        if (feedback) {
            res.status(200).json(feedback);
        } else {
            res.status(404).json({ message: "Feedback not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving feedback", error });
    }
}

async function updateFeedback(req, res) {
    try {
        const feedbackId = req.params.id;
        const feedbackUpdates = req.body;
        const updatedFeedback = await FeedbackModel.findByIdAndUpdate(
            feedbackId,
            feedbackUpdates,
            { new: true }
        );
        if (updatedFeedback) {
            res.status(200).json(updatedFeedback);
        } else {
            res.status(404).json({ message: "Feedback not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating feedback", error });
    }
}

async function deleteFeedback(req, res) {
    try {
        const feedbackId = req.params.id;
        const deletedFeedback = await FeedbackModel.findByIdAndDelete(
            feedbackId
        );
        if (deletedFeedback) {
            res.status(200).json({ message: "Feedback deleted successfully" });
        } else {
            res.status(404).json({ message: "Feedback not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting feedback", error });
    }
}

export const feedbackController = {
    createFeedback,
    getFeedback,
    updateFeedback,
    deleteFeedback,
};
