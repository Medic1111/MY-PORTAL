const express = require("express");
const router = express.Router();

const { loginStudent } = require("../controllers/login");

router.post("/api/login", loginStudent);

module.exports = router;
