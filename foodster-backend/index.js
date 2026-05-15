const express = require("express");
const { USERS } = require("./data");
const { createAuthRouter } = require("./routes/auth.routes");
const {
  initializeUsersWithHashedPasswords,
} = require("./services/auth.service");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

initializeUsersWithHashedPasswords(USERS);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json());

app.use(createAuthRouter(USERS));

// Serve static files from the React frontend build
app.use(express.static(path.join(__dirname, '../dist')));

// Catch-all route to serve the React app for any unmatched routes (Client-side routing)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Server is running on PORT : ${PORT}`);
});
