const fs = require("fs");
const http = require("http");

const data = fs.readFileSync("./dev-data/data.json", "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === "/" || pathName === "/overview") {
        res.end("This is the overview");
    } else if (pathName === "/product") {
        res.end("This is the product");
    } else if (pathName === "/api") {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(data);
    } else {
        res.writeHead(404, {
            "Content-type": "text/html",
        });
        res.end("<h1>This page could not be found</h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to requests on port 8000");
});
