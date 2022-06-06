const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

app.use(cors());
app.use(morgan("dev"));
dotenv.config();
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.listen(process.env.PORT || 3003, () => console.log("server spinning"));
