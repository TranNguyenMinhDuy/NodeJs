let express = require("express");
let router = express.Router();

let userRoutes = require("./users");
let postRoutes = require("./posts");

//Mount routes
router.use("/users", userRoutes);
router.use("/routes", postRoutes);

module.exports = router;