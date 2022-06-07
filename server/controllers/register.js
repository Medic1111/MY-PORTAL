const { Student } = require("../database/database");

const registerStudent = (req, res) => {
  const { name, password, email, studentId, classes } = req.body;

  Student.find(
    { $or: [{ studentId: studentId }, { email: email }] },
    (err, docs) => {
      if (err) {
        console.log(err);
      } else if (docs.length !== 0) {
        res.send("already registered");
      } else {
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
      }
    }
  );
};

module.exports = { registerStudent };
