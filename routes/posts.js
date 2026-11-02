import express from "express";

const router = express.Router();

// Create post
router.post("/", (req, res) => {

    const { title, content } = req.body;

    res.json({
        message: "Post created successfully",
        post: {
            title,
            content
        }
    });
});

// Get posts
router.get("/", (req, res) => {

    res.json({
        message: "Posts received successfully"
    });
});

export default router;