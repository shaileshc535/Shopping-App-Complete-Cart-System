const bcrypt = require("bcryptjs");

const users = [
  {
    name: "shailesh",
    email: "shailesh@gmail.com",
    password: bcrypt.hashSync("shailesh", 10),
    isAdmin: true,
  },

  {
    name: "admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("admin", 10),
  },

  {
    name: "user",
    email: "user@gmail.com",
    password: bcrypt.hashSync("user", 10),
  },
];

module.exports = users;
