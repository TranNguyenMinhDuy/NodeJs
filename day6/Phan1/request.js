let express = require("express")
let app = express();

//Middleware: add timestamp
function addTimeStamp(req, res, next){
    req.timestamp = Date.now();
    req.time = new Date().toISOString();
    next();
}

//Middleware: Add request Id
function addRequestId(req, res, next){
    req.id = Math.random().toString(36).substring(7);
    next();
}

app.use(addTimeStamp)
app.use(addRequestId)

app.get("/", (req, res) => {
    res.json({
        message: "Hello",
        requestId: req.id,
        timestamp: req.timestamp,
        time: req.time
    });
});

app.listen(3000);