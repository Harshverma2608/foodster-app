require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const { createAuthRouter } = require("./routes/auth.routes");

const app = express();
const PORT = process.env.PORT || 3000;

// ── CORS ──────────────────────────────────────────────────────────────────────
const allowedOrigins = [process.env.FRONTEND_URL].filter(Boolean);

function isOriginAllowed(origin) {
  if (!origin) return true;
  if (process.env.NODE_ENV !== "production") {
    if (/^http:\/\/localhost(:\d+)?$/.test(origin)) return true;
  }
  const clean = (s) => s.replace(/\/$/, "");
  return allowedOrigins.map(clean).includes(clean(origin));
}

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (isOriginAllowed(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin || "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  }
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: "10kb" }));

// ── Routes ────────────────────────────────────────────────────────────────────
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.use("/api", createAuthRouter());

// ── Error handler ─────────────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal server error" });
});

// ── Start ─────────────────────────────────────────────────────────────────────
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
