const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "foodster_dev_secret";

function createAuthToken(email) {
  return jwt.sign(
    {
      email,
    },
    JWT_SECRET,
    { expiresIn: "2h" },
  );
}

module.exports = {
  createAuthToken,
};
