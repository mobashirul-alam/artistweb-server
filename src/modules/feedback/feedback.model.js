import { Schema, model } from "mongoose";

const feedbackSchema = new Schema(
    {
        feedback: { type: String, required: true },
        logo: { type: String, required: true },
        name: { type: String, required: true },
        companyName: { type: String, required: true },
    },
    { timestamps: true }
);

const FeedbackModel = model("Feedback", feedbackSchema);

export default FeedbackModel;
