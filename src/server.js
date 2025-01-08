import mongoose from "mongoose";
import app from "./app.js";

let server;

async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);

        server = app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    } catch (err) {
        console.log(err);
    }
}

main();

process.on("unhandledRejection", (error) => {
    console.log(`Unhandled Rejection is detected , shutting down ...`, error);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
process.on("uncaughtException", (error) => {
    console.log(`Uncaught Exception is detected , shutting down ...`, error);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
