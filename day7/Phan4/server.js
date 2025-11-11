// server.js
let app = require("./src/app");
let config = require("./src/config/config");

app.listen(config.port, () => {
  console.log(`🚀 Server running on port ${config.port}`);
  console.log(`📝 Environment: ${config.nodeEnv}`);
  console.log(`🔒 CORS enabled for: ${config.cors.allowedOrigins.join(", ")}`);
});