let express = require("express")
let app = express();

//Middleware: check authencation
function checkAuth(req, res, next){
    let token = req.headers.authorization;
    if(token === "Bearer secret123"){
        req.user = {id: 1, name: "Admin"};
        next(); // token dung => cho qua
    }else{
        res.status(401).json({error: "Unauthorized"})
    }
}

//public route - khong can middleware
app.get("/", (req, res) => {
    res.send("Trang cong khai")
});

// protected route - can middleware
app.get("/admin",checkAuth, (req, res) => {
    res.json({
        message: "trang admin",
        user: req.user
    })
})

app.get("/dashboard", checkAuth, (req, res) => {
    res.send(`Xin chao ${req.user.name}`)
})

app.listen(3000)