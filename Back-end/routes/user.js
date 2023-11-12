const express = require("express");
const route = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");
route.post("/createuser", (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
    db.User.create({
      email: req.body.email,
      password: hashedPassword,
    })
      .then((response) => res.status(201).json(response))
      .catch((err) => res.status(400).json(err));
  });
});
route.get("/getAllUsers", (req, res) => {
  db.User.findAll()
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});
route.get("/getAllBlogs/:UserId", (req, res) => {
  const UserId = req.params.UserId;
  db.User.findByPk(UserId, {
    include: [{ model: db.Blog }],
  })
    .then((response) => res.status(201).json(response.Blogs))
    .catch((err) => res.status(400).json(err));
});
route.post("/login", (req, res) => {
  db.User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (!user) {
        res.status(400).json("invalid email");
      } else {
        bcrypt.compare(req.body.password, user.password).then((same) => {
          if (!same) {
            res.status(400).json("wrong password");
          } else {
            res.status(200).json(true);
          }
        });
      }
    })
    .catch((err) => console.log(err));
});
module.exports = route;
