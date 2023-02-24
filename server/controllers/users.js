const User = require("../models/users");

const UsersController = {
  Create: (req, res) => {
    const user = new User(req.body);
    user.save((err) => {
      if (err) {
        res.status(400).json({ message: "Bad request" });
      } else {
        res.status(201).json({ message: "User created successfully" });
      }
    });
  }
};

module.exports = UsersController;
