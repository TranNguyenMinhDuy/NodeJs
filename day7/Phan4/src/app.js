let express = require("express");
let cors = require("cors");
let helmet = require("helmet");
let routes = require("./routes");
let app = express();

//Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

//routes
app.use("./api", routes);

//404 handler
app.use((req, res) => {
    res.status(404).json({
        error: "Not Found", message: `Cannot ${req.method} ${req.url}`
    }
    )
});

//error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({
        error: err.message || "Internal Server Error"
    });
});

module.exports = app;