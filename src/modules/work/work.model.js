import { Schema, model } from "mongoose";

const workSchema = new Schema(
    {
        title: { type: String, required: true },
        tags: { type: [String], required: true },
        image: { type: String, required: true },
        isLatest: { type: Boolean, default: false },
    },
    { timestamps: true }
);

const WorkModel = model("Work", workSchema);

export default WorkModel;
