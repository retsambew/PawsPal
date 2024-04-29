import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authModel from "../models/authModel.js";
import fetchUser from "../middleware/middleware.js";
const secret = "svnhovg9gtrvervg45y4b4"
const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        if (!username || !email || !password) {
            return res.status(400).json({ message: "Enter all credentials" });
        }

        let user = await authModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);   
        user = await authModel.create({
            username,
            email,
            password: hashedPassword
        });

        const data = {
            user: {
                id: user.id
            }
        };
        const authToken = jwt.sign(data, secret);
        return res.status(200).json({ success: true, authToken });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Enter all credentials" });
        }

        let user = await authModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        };
        const authToken = jwt.sign(data, secret);
        return res.status(200).json({ success: true, authToken });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.post('/getuser', fetchUser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await authModel.findById(userId).select("-password");
        return res.status(200).json(user);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router;