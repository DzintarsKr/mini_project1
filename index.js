import dotenv from "dotenv";
import express from "express";

import authRouter from "./routes/auth.js";
import postRouter from "./routes/posts.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());

// Главный маршрут
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Routes
app.use("/auth", authRouter);
app.use("/posts", postRouter);

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});