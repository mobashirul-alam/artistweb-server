import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import notFound from "./middleware/notFound.js";
import { feedbackRouter } from "./modules/feedback/feedback.route.js";
import { workRouter } from "./modules/work/work.route.js";

const app = express();
dotenv.config();
// Parsers
app.use(express.json());

app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "http://localhost:3001",
            "http://localhost:3002",
        ],
        credentials: true,
    })
);

// Main Routes
app.use("/api/v1/work", workRouter);
app.use("/api/v1/feedback", feedbackRouter);

// Health check route
app.get("/", (req, res) => {
    res.send("Hello! Server is running");
});

// Error handlers
app.use(notFound);

export default app;
