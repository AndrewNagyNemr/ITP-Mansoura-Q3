const http = require("http");

const app = http.createServer((req, res) => {
    if (req.url === "/") {
        if (req.method === "GET")
            res.write("Hello to my server");
        if (req.method === "POST")
            res.write("POST request on /");
        return res.end()
    }
    if (req.url === "/clients") {
        res.write("<h1>Welcome to clients page</h1>");
        return res.end()
    }
    res.write("invalid url");
    res.end()
})

app.listen(3000);