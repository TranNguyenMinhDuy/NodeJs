let express = require("express");
let app = express();

//logger middleware
function logger(req, res, next){
    let time = new Date().toISOString();
    console.log(`[${time}] ${req.method} ${req.url}`);
    next();
}

app.use(logger);

app.get("/", (req, res) => {
    res.send("Home");
});

app.get("/users", (req, res) => {
    res.send("Users");
});

app.listen(3000);