const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  studentId: String,
  classes: Array,
  password: String,
  email: String,
});

const Student = new mongoose.model("Student", studentSchema);

module.exports = { Student };
