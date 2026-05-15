const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

// In-memory fallback (when no MongoDB)
const inMemoryUsers = require("../data").USERS || [];
const { initializeUsersWithHashedPasswords, findUserByEmail, createUser, authenticateUser, buildAuthResponse } = require("../services/auth.service");
initializeUsersWithHashedPasswords(inMemoryUsers);

const JWT_SECRET = process.env.JWT_SECRET || "foodster-dev-secret-change-in-production";

function createAuthRouter() {
  const router = express.Router();
  const useDB = () => mongoose.connection.readyState === 1;

  // ── SIGNUP ──────────────────────────────────────────────────────────
  router.post("/signup", async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required" });
      }
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        return res.status(400).json({ success: false, message: "Please enter a valid email" });
      }
      if (password.length < 6) {
        return res.status(400).json({ success: false, message: "Password must be at least 6 characters" });
      }

      if (useDB()) {
        // MongoDB path
        const User = require("../models/User");
        const existing = await User.findOne({ email: email.toLowerCase() });
        if (existing) {
          return res.status(409).json({ success: false, message: "An account with this email already exists" });
        }
        const user = await User.create({ email: email.toLowerCase(), password });
        const token = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, { expiresIn: "7d" });
        return res.status(201).json({ success: true, message: "Account created successfully", user: { email: user.email }, token });
      } else {
        // In-memory fallback
        const existing = findUserByEmail(inMemoryUsers, email.toLowerCase());
        if (existing) {
          return res.status(409).json({ success: false, message: "An account with this email already exists" });
        }
        const user = createUser(inMemoryUsers, { email: email.toLowerCase(), password });
        return res.status(201).json(buildAuthResponse(user, "Account created successfully"));
      }
    } catch (err) {
      console.error("Signup error:", err);
      res.status(500).json({ success: false, message: "Something went wrong. Please try again." });
    }
  });

  // ── LOGIN ────────────────────────────────────────────────────────────
  router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required" });
      }

      if (useDB()) {
        // MongoDB path
        const User = require("../models/User");
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user || !(await user.comparePassword(password))) {
          return res.status(401).json({ success: false, message: "Invalid email or password" });
        }
        const token = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, { expiresIn: "7d" });
        return res.status(200).json({ success: true, message: "Login successful", user: { email: user.email }, token });
      } else {
        // In-memory fallback
        const user = findUserByEmail(inMemoryUsers, email.toLowerCase());
        if (!authenticateUser(user, password)) {
          return res.status(401).json({ success: false, message: "Invalid email or password" });
        }
        return res.status(200).json(buildAuthResponse(user, "Login successful"));
      }
    } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({ success: false, message: "Something went wrong. Please try again." });
    }
  });

  return router;
}

module.exports = { createAuthRouter };
