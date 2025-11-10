let express = require("express")
let app = express()
let path = require("path")

//serve static files tu folder 'public'
app.use(express.static("public"));

//hoac voi prefix
app.use("/static", express.static(path.join(__dirname,"public")))

app.listen(3000)