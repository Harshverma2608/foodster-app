const {
  isHashedPassword,
  hashPassword,
  comparePassword,
} = require("../utils/password.util");
const { createAuthToken } = require("../utils/token.util");

function initializeUsersWithHashedPasswords(users) {
  for (const user of users) {
    if (!isHashedPassword(user.password)) {
      user.password = hashPassword(user.password);
    }
  }
}

function findUserByEmail(users, email) {
  return users.find((user) => user.email === email);
}

function createUser(users, { email, password }) {
  const user = {
    email,
    password: hashPassword(password),
  };

  users.push(user);

  return user;
}

function authenticateUser(user, password) {
  if (!user) {
    return false;
  }

  if (isHashedPassword(user.password)) {
    return comparePassword(password, user.password);
  }

  return user.password === password;
}

function buildAuthResponse(user, message) {
  return {
    success: true,
    message,
    user: {
      email: user.email,
    },
    token: createAuthToken(user.email),
  };
}

module.exports = {
  initializeUsersWithHashedPasswords,
  findUserByEmail,
  createUser,
  authenticateUser,
  buildAuthResponse,
};
