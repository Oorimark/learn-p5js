import http from "http";
import fs from "fs";
import path from "path";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  const filePath = path
    .join(__dirname, "public", req.url === "/" ? "/index.html" : req.url)
    .slice(1);

  fs.readFile(filePath, "utf8", (err, content) => {
    if (err) {
      console.error("Error!");
    } else {
      res.end(content);
    }
  });
});

server.listen(5000, () => console.log("Running Node js application"));
