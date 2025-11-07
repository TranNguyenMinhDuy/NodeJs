let express = require("express");
let fs = require("fs").promises;
let app = express();

app.get("/profile", (req, res) => {
  // Kiểm tra login
  if (!req.headers.token) {
    return res.send("Bạn chưa đăng nhập!");
  }
  res.send("Trang profile");
});

app.get("/settings", (req, res) => {
  // Kiểm tra login (lặp lại!)
  if (!req.headers.token) {
    return res.send("Bạn chưa đăng nhập!");
  }
  res.send("Trang settings");
});

app.get("/orders", (req, res) => {
  // Kiểm tra login (lặp lại!)
  if (!req.headers.token) {
    return res.send("Bạn chưa đăng nhập!");
  }
  res.send("Đơn hàng của bạn");
});

// Output khi truy cập:
// Middleware 1
// Middleware 2
// Route handler

app.listen(3000)