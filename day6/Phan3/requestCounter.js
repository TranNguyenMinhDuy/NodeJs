let express = require("express")
let app = express();

let stats = {
    totalRequests: 0,
    byMethod: {},
    byRoute: {}
};

function requestCounter(req, res, next){
    stats.totalRequests++;

    //count by method:
    stats.byMethod[req.method] = (stats.byMethod[req.method] || 0) + 1;

    //count by route
    stats.byRoute[req.url] = (stats.byRoute[req.url] || 0) + 1;

    next();
}

app.use(requestCounter);

app.get("/", (req, res) => {
    res.send("Home")
})

app.get("/about", (req,res) => {
    res.send("About");
});

app.get("/stats", (req, res) => {
    res.json(stats);
})

app.listen(3000, () => {
    console.log("Server is running!!")
})