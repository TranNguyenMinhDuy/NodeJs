let express = require("express")
let app = express()

//route dau tien
app.get("/", (req, res) => {
    res.send("<h1>Trang gioi thieu</h1>")
});

//Json response
app.get("/api/users", (req, res) => {
    let users = [
        { id: 1, name: "An", email: "an@gmail.com" },
        { id: 2, name: "Bình", email: "binh@gmail.com" }
    ]
    res.json(users);
})

let PORT = 3000;
app.listen(PORT, () => {
    console.log(`Express server chạy tại http://localhost:${PORT}`)
})