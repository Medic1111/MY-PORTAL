const express = require("express");
const router = express.Router();
const { registerStudent } = require("../controllers/register");

router.post("/api/register", registerStudent);

module.exports = router;
