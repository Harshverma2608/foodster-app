const bcrypt = require("bcryptjs");

function isHashedPassword(password) {
  return typeof password === "string" && password.startsWith("$2");
}

function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}

function comparePassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}

module.exports = {
  isHashedPassword,
  hashPassword,
  comparePassword,
};
