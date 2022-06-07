const { Student } = require("../database/database");

const loginStudent = (req, res) => {
  const { studentId, password } = req.body;
  Student.find({ studentId, password }, (err, student) =>
    err ? console.log(err) : res.send(student)
  );
};

module.exports = { loginStudent };
