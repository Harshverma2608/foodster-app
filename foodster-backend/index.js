require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const path = require("path");
const { createAuthRouter } = require("./routes/auth.routes");

const app = express();
const PORT = process.env.PORT || 3000;

// ── CORS ─────────────────────────────────────────────────────────────────────
// Must be registered BEFORE helmet and all routes so preflight OPTIONS
// requests are answered before any other middleware runs.

const allowedOrigins = [process.env.FRONTEND_URL].filter(Boolean);

function isOriginAllowed(origin) {
  if (!origin) return true; // curl / Postman / server-to-server

  // Dev: allow any localhost regardless of port
  if (process.env.NODE_ENV !== "production") {
    if (/^http:\/\/localhost(:\d+)?$/.test(origin)) return true;
  }

  // Prod: exact match against FRONTEND_URL (trailing-slash tolerant)
  const clean = (s) => s.replace(/\/$/, "");
  return allowedOrigins.map(clean).includes(clean(origin));
}

// Inline CORS middleware — handles both preflight and normal requests
app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (isOriginAllowed(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin || "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  }

  // Answer preflight immediately — no further processing needed
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

// ── Security headers (after CORS) ────────────────────────────────────────────
app.use(helmet({ contentSecurityPolicy: false }));

app.use(express.json({ limit: "10kb" }));

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

// Handle OPTIONS preflight explicitly before route handlers
app.use((req, res, next) => {
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

// Auth routes
app.use("/api", createAuthRouter());

// Serve React frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../dist")));
  app.get("/(.*)", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist", "index.html"));
  });
}

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal server error" });
});

// ── Start server ─────────────────────────────────────────────────────────────
const MONGODB_URI = process.env.MONGODB_URI;

if (MONGODB_URI) {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log("✅ Connected to MongoDB");
      app.listen(PORT, () => console.log(`🚀 Server running on PORT: ${PORT}`));
    })
    .catch((err) => {
      console.error("❌ MongoDB connection failed:", err.message);
      process.exit(1);
    });
} else {
  console.warn("⚠️  No MONGODB_URI found. Running with in-memory fallback.");
  app.listen(PORT, () => console.log(`🚀 Server running on PORT: ${PORT}`));
}
