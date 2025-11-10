let express =require("express");
const { resolve } = require("path");
let app = express()

function responseTimeLogger(req, res, next){
    let start = Date.now();

    //lang nghe khi response ket thuc
    res.on("finish", () => {
        let duration = Date.now() - start;
        console.log(`${req.method} ${req.url} - ${duration}ms - ${res.statusCode}`);
    });
    next();
}

app.use(responseTimeLogger);
app.get("/fast", (req, res) => {
    res.send("Fast response");
});

app.get("/slow", async(req, res) => {
    //gia lap xu ly cham
    await new Promise(resolve => setTimeout(resolve, 2000));
    res.send("Slow response");
})

app.listen(3000)