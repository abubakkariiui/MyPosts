const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const postsRoutes = require("./routes/posts");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: false }));

mongoose
  .connect("mongodb://localhost:27017/mypost")
  .then((res) => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,PUT,DELETE,OPTIONS"
  );
  next();
});

app.use("/api/posts",postsRoutes);

module.exports = app;
