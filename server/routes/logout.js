const express = require("express");
const router = express.Router();
const { logoutStudent } = require("../controllers/logout");

router.put("/api/:id/logout", logoutStudent);

module.exports = router;
