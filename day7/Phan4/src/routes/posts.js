// src/routes/posts.js
let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Get all posts" });
});

router.get("/:id", (req, res) => {
  res.json({ message: `Get post ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.json({ message: "Create post" });
});

module.exports = router;