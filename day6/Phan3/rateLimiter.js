let express = require("express")
let app = express()

//simple rate limiter: Max 5 request per minutes
let requestCounts = {};

function rateLimiter(req, res, next) {
    let ip = req.ip;
    let now = Date.now();
    let windowMs = 60 * 1000; // 1 phut
    let maxRequests = 5;

    //khoi tao array cho IP
    if (!requestCounts[ip]) {
        requestCounts[ip] = [];
    }

    //xoa request cu (ngoai window time)
    requestCounts[ip] = requestCounts[ip].filter(time => now - time < windowMs)

    //kiem tra limit
    if (requestCounts[ip].length >= maxRequests) {
        return res.status(429).json({
            message: "Vui long thu lai sau 1 phut",
            error: "Qua nhieu requests",
            remainingTime: Math.ceil((requestCounts[ip][0] + windowMs - now) / 1000) + "giay"
        });
    }

    //them request hien tai
    requestCounts[ip].push(now);

    //them thong tin vao response headers
    res.setHeader("X-RateLimit-Limit", maxRequests)
    res.setHeader("X-RateLimit-Remaining", maxRequests - requestCounts[ip].length)

    next();
}

app.use(rateLimiter)

app.get("/", (req, res) => {
    res.json({
        message: "Ok",
        remaining: res.getHeader("X-RateLimit-Remaining")
    })
})

app.listen(3000)