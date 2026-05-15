const express = require("express");
const {
  normalizeCredentials,
  requireCredentials,
  validateSignupEmail,
} = require("../middleware/validateAuthBody");
const {
  findUserByEmail,
  createUser,
  authenticateUser,
  buildAuthResponse,
} = require("../services/auth.service");

function createAuthRouter(users) {
  const router = express.Router();

  router.post(
    "/signup",
    normalizeCredentials,
    requireCredentials,
    validateSignupEmail,
    function (req, res) {
      const { email, password } = req.credentials;
      const userExists = findUserByEmail(users, email);

      if (userExists) {
        return res.status(409).json({
          success: false,
          message: "User already exists with this email",
        });
      }

      const user = createUser(users, { email, password });

      return res
        .status(201)
        .json(buildAuthResponse(user, "User registered successfully"));
    },
  );

  router.post(
    "/login",
    normalizeCredentials,
    requireCredentials,
    function (req, res) {
      const { email, password } = req.credentials;
      const user = findUserByEmail(users, email);

      if (!authenticateUser(user, password)) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      return res.status(200).json(buildAuthResponse(user, "Login successful"));
    },
  );

  return router;
}

module.exports = {
  createAuthRouter,
};
