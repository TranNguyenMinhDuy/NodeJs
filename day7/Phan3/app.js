let express = require("express")
let helmet = require("helmet");

let app = express()

//them security headers
app.use(helmet())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Secured with helmet");
})

app.listen(3000)