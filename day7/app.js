// app.js
let express = require("express");
let config = require("./config");

let app = express();

console.log("Config:", config);

app.get("/", (req, res) => {
  res.json({
    environment: config.nodeEnv,
    isDev: config.isDevelopment(),
    isProd: config.isProduction()
  });
});

app.listen(config.port, () => {
  console.log(`🚀 Server running on port ${config.port}`);
});