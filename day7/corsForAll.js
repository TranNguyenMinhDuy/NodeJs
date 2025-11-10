// app.js
let express = require("express");
let cors = require("cors");

let app = express();

// Cho phép TẤT CẢ origins
app.use(cors());

app.use(express.json());

app.get("/api/data", (req, res) => {
  res.json({ message: "CORS enabled!" });
});

app.listen(3000);

// Giờ frontend bất kỳ đều có thể gọi API này