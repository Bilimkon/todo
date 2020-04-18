const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const todoRoutes = require('./routes/todo');


const app = express();

mongoose
  .connect("mongodb://localhost:27017/erp",
    { useNewUrlParser: true , useUnifiedTopology: true})
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, UPDATE, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/todo", todoRoutes);

module.exports = app;
