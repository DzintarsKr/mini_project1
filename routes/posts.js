import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create post (protected)
router.post("/", authMiddleware, (req, res) => {

    const { title, content } = req.body;

    res.json({
        message: "Post created successfully",
        post: {
            title,
            content,
            author: req.user.username
        }
    });
});

// Get posts (public)
router.get("/", (req, res) => {
    res.json({
        message: "Posts received successfully"
    });
});

export default router;