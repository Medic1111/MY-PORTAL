const { Student } = require("../database/database");

const registerStudent = (req, res) => {
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
};

module.exports = { registerStudent };
