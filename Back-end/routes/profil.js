const express = require("express");
const route = express.Router();
const db = require("../models");

route.post("/createprofil", (req, res) => {
  db.Profil.count({ where: { email: req.body.email } }).then((doc) => {
    if (doc !== 0) {
      res.status(400).json("email already used !");
    }
    else
    {
      db.Profil.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        country: req.body.country,
        age: req.body.age,
      })
        .then((response) => res.status(201).json(response))
        .catch((err) => res.status(400).json(err));
    }
  });
});

module.exports = route;
