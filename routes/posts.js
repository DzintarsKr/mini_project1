import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
    res.json({ message: "Post created!" });
});

router.get("/", (req, res) => {
    res.json({ message: "Posts route works!" });
});

export default router;