const { Student } = require("../database/database");
const bcrypt = require("bcrypt");

const loginStudent = (req, res) => {
  const { studentId, password } = req.body;
  Student.find({ studentId }, (err, student) => {
    err ? console.log(err) : null;
    if (student.length === 0) {
      res.status(404).send({ message: "Not Found" });
    } else {
      bcrypt.compare(password, student[0].password, (err, match) => {
        match
          ? res.json(student)
          : res.status(401).send({ message: "Not auth" });
      });
    }
  });
};

module.exports = { loginStudent };
