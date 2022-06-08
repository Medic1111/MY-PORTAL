const { Student } = require("../database/database");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const registerStudent = (req, res) => {
  const { name, password, email, studentId, classes } = req.body;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    } else {
      Student.find(
        { $or: [{ studentId: studentId }, { email: email }] },
        (err, docs) => {
          if (err) {
            console.log(err);
          } else if (docs.length !== 0) {
            res.status(409).json({ message: "Already Registered" });
          } else {
            let newStudent = new Student({
              name,
              password: hash,
              email,
              studentId,
              classes,
            });
            newStudent.save((err, student) =>
              err ? console.log(err) : res.send(student)
            );
          }
        }
      );
    }
  });
};

module.exports = { registerStudent };
