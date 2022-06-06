const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

// MIDDLEWARES
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));

// DATABASE
mongoose.connect(process.env.DB_URI, (err) =>
  err ? console.log(err) : console.log("Connected to DB")
);

const schema = new mongoose.Schema({
  name: String,
});

const Test = new mongoose.model("Test", schema);

app.get("/api", (req, res) => {
  Test.find({}, (err, docs) => {
    err ? console.log(err) : res.send(docs);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(process.env.PORT || 3003, () => console.log("server spinning"));
