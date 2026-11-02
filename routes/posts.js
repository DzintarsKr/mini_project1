import express from "express";

import { getDB } from "../db/index.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// GET all posts
router.get("/", async (req, res) => {
    try {
        const db = getDB();

        const postsCollection = db.collection("posts");

        const posts = await postsCollection.find().toArray();

        res.status(200).json(posts);

    } catch (error) {
        console.error("Get posts error:", error);

        res.status(500).json({
            message: "Internal server error"
        });
    }
});

// CREATE post
router.post("/", authMiddleware, async (req, res) => {
    try {
        const { title, content } = req.body;

        // Validation
        if (
            typeof title !== "string" ||
            !title.trim() ||
            typeof content !== "string" ||
            !content.trim()
        ) {
            return res.status(400).json({
                message: "Title and content are required"
            });
        }

        const db = getDB();

        const postsCollection = db.collection("posts");

        // Create post
        const newPost = {
            title,
            content,
            author: req.user.username,
            authorId: req.user.userId,
            createdAt: new Date()
        };

        // Save post to MongoDB
        const result = await postsCollection.insertOne(newPost);

        res.status(201).json({
            message: "Post created successfully",
            postId: result.insertedId
        });

    } catch (error) {
        console.error("Create post error:", error);

        res.status(500).json({
            message: "Internal server error"
        });
    }
});

export default router;