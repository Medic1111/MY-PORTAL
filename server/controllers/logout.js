const { Student } = require("../database/database");

const logoutStudent = (req, res) => {
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
};

module.exports = { logoutStudent };
