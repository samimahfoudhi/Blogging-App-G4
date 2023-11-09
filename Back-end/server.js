const express = require("express");
const cors = require("cors");
const db = require("./models");
const port = 7000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
});
