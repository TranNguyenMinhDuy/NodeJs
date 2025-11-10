let express = require("express")
let app = express()

app.use(express.json())

app.post("/api/users", (req, res) => {
    console.log("Body: ", req.body)

    let {name, email} = req.body
    res.json({
        message: "User created",
        data: {name ,email}
    })
})

app.listen(3000)