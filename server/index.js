// GENERAL
const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

// DATABASE
mongoose.connect(process.env.DB_URI, (err) =>
  err ? console.log(err) : console.log("Connected to DB")
);

// GENERAL MIDDLEWARES
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));

// PERSONAL REQUIRES
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const logoutRoute = require("./routes/logout");

// PERSONAL MIDDLEWARES

app.use("/", registerRoute);
app.use("/", loginRoute);
app.use("/", logoutRoute);

// UNHANDLED
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(process.env.PORT || 3003, () => console.log("server spinning"));
