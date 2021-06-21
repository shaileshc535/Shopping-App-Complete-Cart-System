const jwt = require("jsonwebtoken");

const genrateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY, {
    expiresIn: "2 hour",
  });
};

module.exports = genrateToken;
