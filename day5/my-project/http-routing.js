let http = require("http")
let server = http.createServer((req, res) => {
    let url = req.url
    let method = req.method

    console.log(`${method} ${url}`);

    //Routing
    if (url === "/" && method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
        res.end(`
            <h1>Trang chu</h1>
            <p>Chao mung den voi node.js</p>
            <a href="/about">Ve chung toi</a>
            `);
    } else if (url === "/about" && method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
        res.end(`
            <h1>Về chúng tôi</h1>
      <p>Đây là trang giới thiệu</p>
      <a href="/">Quay lại trang chủ</a>
      `);
    } else if (url === "/api/users" && method === "GET") {
        //chuyen ve json
        res.writeHead(200, { "Content-Type": "application/json" })
        let users = [
            { id: 1, name: "An" },
            { id: 2, name: "Bình" }
        ];
        res.end(JSON.stringify(users))
    } else{
        //404 not found
        res.writeHead(404, {"Content-Type": "text/html; charset=utf8"});
        res.end("<h1>404 - Không tìm thấy trang</h1>")
    }
});

server.listen(3000, () => {
    console.log("Server on Port 3000")
})

