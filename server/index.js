// GENERAL
const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

// GENERAL MIDDLEWARES
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));

// PERSONAL REQUIRES
const loginRoute = require("./routes/login");
app.use("/", loginRoute);
const registerRoute = require("./routes/register");
app.use("/", registerRoute);
const logoutRoute = require("./routes/logout");
app.use("/", logoutRoute);

// DATABASE
mongoose.connect(process.env.DB_URI, (err) =>
  err ? console.log(err) : console.log("Connected to DB")
);

// const studentSchema = new mongoose.Schema({
//   name: String,
//   studentId: String,
//   classes: Array,
//   password: String,
//   email: String,
// });

// const Student = new mongoose.model("Student", studentSchema);

// LOGIN

// app.post("/api/login", (req, res) => {
//   const { studentId, password } = req.body;
//   Student.find({ studentId, password }, (err, student) =>
//     err ? console.log(err) : res.send(student)
//   );
// });

// REGISTER

// app.post("/api/register", (req, res) => {
//   const { name, password, email, studentId, classes } = req.body;

//   Student.find(
//     { $or: [{ studentId: studentId }, { email: email }] },
//     (err, docs) => {
//       if (err) {
//         console.log(err);
//       } else if (docs.length !== 0) {
//         res.send("already registered");
//       } else {
//         let newStudent = new Student({
//           name,
//           password,
//           email,
//           studentId,
//           classes,
//         });
//         newStudent.save((err, student) =>
//           err ? console.log(err) : res.send(student)
//         );
//       }
//     }
//   );
// });

// LOGOUT-UPDATE

// app.put("/api/:id/logout", (req, res) => {
//   const { id } = req.params;
//   const { name, password, email, studentId, classes } = req.body;
//   Student.findOneAndUpdate(
//     { _id: id },
//     {
//       name,
//       password,
//       email,
//       studentId,
//       classes,
//     },
//     { new: true, returnOriginal: false },
//     (err, success) =>
//       err ? req.status(400).send(err) : res.status(204).send(success)
//   );
// });

// UNHANDLED
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(process.env.PORT || 3003, () => console.log("server spinning"));
