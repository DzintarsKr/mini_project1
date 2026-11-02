import express from "express";
import bcrypt from "bcrypt";

import { getDB } from "../db/index.js";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validation
        if (
            typeof username !== "string" ||
            !username.trim() ||
            typeof password !== "string" ||
            !password
        ) {
            return res.status(400).json({
                message: "Username and password are required"
            });
        }

        const db = getDB();

        const usersCollection = db.collection("users");

        // Check if user exists
        const existingUser = await usersCollection.findOne({
            username
        });

        if (existingUser) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = {
            username,
            password: hashedPassword
        };

        // Save user to MongoDB
        const result = await usersCollection.insertOne(newUser);

        res.status(201).json({
            message: "User registered successfully",
            userId: result.insertedId
        });

    } catch (error) {
        console.error("Registration error:", error);

        res.status(500).json({
            message: "Internal server error"
        });
    }
});

// Login 
router.post("/login", (req, res) => {
    res.json({
        message: "Login route works!"
    });
});

export default router;