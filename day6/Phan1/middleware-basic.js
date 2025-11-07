let express = require("express")
let app = express();

//middleware function
function myMiddleware(req, res, next){
    console.log("Middleware dang chay!");
    next(); //phai goi next() de tiep tuc
}

//su dung middleware
app.use(myMiddleware);

app.get("/", (req, res) => {
    res.send("HomePage");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.listen(3000, () => {
    console.log("Server is running");
});