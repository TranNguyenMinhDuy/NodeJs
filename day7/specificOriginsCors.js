let express = require("express");
let cors = require("cors");

let app = express();

//chi cho phep specific origins
let allowedOrigins = [
    "http://localhost:3001",
    "http://localhost:3002",
    "https://myapp.com",
    "https://www.myapp.com"
]

let corsOptions = {
    origin: function (origin, callback) {
        //cho phep requests khong co origin
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("not allowed by CORS"))
        }
    },
    credentials: true, // Cho phép cookies
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json())

app.get("/data", (req, res) => {
    res.json({message: "CORS with specific origins"});
});

app.listen(3000, () => {
    console.log("Running!!!")
})