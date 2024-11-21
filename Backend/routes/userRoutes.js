import express from "express";
import {
  registerUser,
  loginUser,
  getUserDetails,
} from "../controllers/userController.js";

const router = express.Router();

// Routes
router.post("/register", registerUser); // Register a new user
router.post("/login", loginUser); // Login an existing user
router.get("/:id", getUserDetails); // Get user details by ID

export default router;
