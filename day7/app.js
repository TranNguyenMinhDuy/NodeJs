// src/app.js
let express = require("express");
let cors = require("cors");
let helmet = require("helmet");
let rateLimit = require("express-rate-limit");

let config = require("./config/config");
let routes = require("./routes");
let { notFound, errorHandler } = require("./middlewares/errorHandler");

let app = express();

// Security
app.use(helmet());

// CORS
let corsOptions = {
  origin: function (origin, callback) {
    if (!origin || config.cors.allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};
app.use(cors(corsOptions));

// Rate limiting
let limiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.max,
  message: { error: "Too many requests, please try again later" }
});
app.use(limiter);

// Body parser
app.use(express.json());

// Logger (only in development)
if (config.isDevelopment()) {
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });
}

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    environment: config.nodeEnv,
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use("/api", routes);

// Error handlers
app.use(notFound);
app.use(errorHandler);

module.exports = app;