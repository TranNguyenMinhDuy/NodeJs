// src/middlewares/errorHandler.js
let config = require("../config/config");

exports.notFound = (req, res) => {
    res.status(404).json({
        error: "Not Found",
        message: `Cannot ${req.method} ${req.url}`
    });
};

exports.errorHandler = (err, req, res, next) => {
    console.error("❌ Error:", err.message);

    if (config.isDevelopment()) {
        console.error(err.stack);
    }

    let statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        error: err.message || "Internal Server Error",
        ...(config.isDevelopment() && { stack: err.stack })
    });
};