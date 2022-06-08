const { Student } = require("../database/database");
const bcrypt = require("bcrypt");

const loginStudent = (req, res) => {
  const { studentId, password } = req.body;
  Student.find({ studentId }, (err, student) => {
    if (err) {
      console.log(err);
    } else if (student[0]) {
      bcrypt.compare(password, student[0].password, (err, match) => {
        match ? res.send(student) : console.log(err);
      });
    } else {
      res.send("invalid password");
    }
  });
};

module.exports = { loginStudent };
