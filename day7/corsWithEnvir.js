// app.js
require("dotenv").config();
let express = require("express");
let cors = require("cors");

let app = express();

let allowedOrigins = process.env.ALLOWED_ORIGINS.split(",");

let corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }, 
  credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());

app.get("/api/data", (req, res) => {
  res.json({ message: "Data from API" });
});

app.listen(3000);