let http = require("http")

//tao server
let server = http.createServer((req, res) => {
    //set response header
    res.writeHead(200, {"Content-Type": "text/plain; charset=utf8"});

    //send response 
    res.end("Xin Chao tu NodeJs Server")
});

//listen port 3000
let PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server dang chay tai port: ${PORT}`)
})