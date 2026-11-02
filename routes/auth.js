import express from "express";

const router = express.Router();

// Register
router.post("/register", (req, res) => {

    const { name, email, password } = req.body;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    res.json({
        message: "Registration successful",
        user: {
            name,
            email
        }
    });
});

// Login
router.post("/login", (req, res) => {

    const { email, password } = req.body;

    console.log("Login email:", email);

    res.json({
        message: "Login successful",
        email
    });
});

export default router;