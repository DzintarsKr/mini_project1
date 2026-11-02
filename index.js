import dotenv from "dotenv";
import express from "express";

import authRouter from "./routes/auth.js";
import postsRouter from "./routes/posts.js";
import connectDB from "./db/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

// Middleware
app.use(express.json());

// Main route
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Routes
app.use("/auth", authRouter);
app.use("/posts", postsRouter);

// Start server
const startServer = async () => {
    try {
        await connectDB();

        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });

    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();