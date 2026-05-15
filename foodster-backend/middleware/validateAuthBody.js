function normalizeCredentials(req, res, next) {
  const email = typeof req.body.email === "string" ? req.body.email.trim() : "";
  const password =
    typeof req.body.password === "string" ? req.body.password : "";

  req.credentials = {
    email,
    password,
  };

  next();
}

function requireCredentials(req, res, next) {
  const { email, password } = req.credentials;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  return next();
}

function validateSignupEmail(req, res, next) {
  const { email } = req.credentials;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format",
    });
  }

  return next();
}

module.exports = {
  normalizeCredentials,
  requireCredentials,
  validateSignupEmail,
};
