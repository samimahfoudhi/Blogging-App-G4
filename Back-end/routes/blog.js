const express = require("express");
const route = express.Router();
const db = require("../models");

route.post("/createblog", (req, res) => {
  db.Blog.create({
    title: req.body.title,
    image: req.body.image,
    content: req.body.content,
    UserId: req.body.UserId,
  })
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});
route.get("/getAllBlogs", (req, res) => {
  db.Blog.findAll()
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});

route.put("/updateblog/:id", (req, res) => {
  db.Blog.update(
    {
      title: req.body.title,
      image: req.body.image,
      content: req.body.content,
      UserId: req.body.UserId,
    },
    { where: { id: req.params.id } }
  )
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});
route.delete("/deleteblog/:id", (req, res) => {
  db.Blog.destroy({ where: { id: req.params.id } })
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});

module.exports = route;
