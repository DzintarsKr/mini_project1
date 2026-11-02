import express from "express";

const router = express.Router();

router.post("/register", (req, res) => {
    res.json({ message: "Register route works!" });
});

router.post("/login", (req, res) => {
    res.json({ message: "Login route works!" });
});

export default router;