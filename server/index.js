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

const studentSchema = new mongoose.Schema({
  name: String,
  studentId: String,
  classes: Array,
  password: String,
  email: String,
});

const Student = new mongoose.model("Student", studentSchema);

app.get("/api", (req, res) => {
  Student.find({}, (err, docs) => {
    err ? console.log(err) : res.send(docs);
  });
});

// REGISTER

app.post("/api/register", (req, res) => {
  const { name, password, email, studentId, classes } = req.body;
  let newStudent = new Student({
    name,
    password,
    email,
    studentId,
    classes,
  });
  newStudent.save((err, student) =>
    err ? console.log(err) : res.send(student)
  );
});

// LOGIN

app.post("/api/login", (req, res) => {
  const { studentId, password } = req.body;
  Student.find({ studentId, password }, (err, student) =>
    err ? console.log(err) : res.send(student)
  );
});

// SAVE CHANGES

app.put("/api/:id/logout", (req, res) => {
  const { id } = req.params;
  const { name, password, email, studentId, classes } = req.body;
  Student.findOneAndUpdate(
    { _id: id },
    {
      name,
      password,
      email,
      studentId,
      classes,
    },
    { new: true, returnOriginal: false },
    (err, success) =>
      err ? req.status(400).send(err) : res.status(204).send(success)
  );
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(process.env.PORT || 3003, () => console.log("server spinning"));
