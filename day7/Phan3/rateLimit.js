let express = require("express")
let rateLimit = require("express-rate-limit");

let app = express();

//rate limiter
let limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15phut
    max: 100, //Max 100 request per 15phut
    message: {
        error: "Qua nhieu requests tu IP nay, vui long thu lai sau 15phut"
    },
    standardHeaders: true, // return rate limit info in headers
    legacyHeaders: false
});

//ap dung cho tat ca routes
app.use(limiter);

//hoac ap dung cho specific routees
let strictLimiter = rateLimit({
    windowMs: 60 * 1000, //1 phut
    max: 5 // max 5 request per phut
});

app.post("/api/login", strictLimiter, (req, res) => {
    res.json({ message: "Login endpoint" })
});

app.listen(3000)