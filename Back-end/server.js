const express = require("express");
const cors = require("cors");
const db = require("./models");
const port = 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const profilRouter = require("./routes/profil");
const userRouter = require("./routes/user");
const blogRouter = require("./routes/blog");
app.use("/", profilRouter);
app.use("/", userRouter);
app.use("/", blogRouter);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
});
