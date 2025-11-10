// config.js
require("dotenv").config();

module.exports = {
  // Server
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  
  // Database
  database: {
    url: process.env.DATABASE_URL,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  },
  
  // Security
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || "7d"
  },
  
  // API
  apiKey: process.env.API_KEY,
  
  // Limits
  rateLimit: parseInt(process.env.RATE_LIMIT) || 100,
  maxFileSize: parseInt(process.env.MAX_FILE_SIZE) || 5242880, // 5MB
  
  // Helper functions
  isDevelopment: () => process.env.NODE_ENV === "development",
  isProduction: () => process.env.NODE_ENV === "production"
};