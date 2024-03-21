// const fs = require("fs");
// fs.writeFile("myFile.txt", "今天天氣不錯", (e) => {
//   if (e) throw e;
//   console.log("文件已撰寫完畢");
// });

// fs.readFile("myFile.txt", "utf-8", (e, data) => {
//   if (e) throw e;
//   console.log("讀取完畢：" + data);
// });

// fs.readFile("hkdfuoisaud.txt", "utf-8", (e, data) => {
//   if (e) throw e;
//   console.log("讀取完畢：" + data);
// });

// const http = require("http");
// const server = http.createServer((req, res) => {
//   //回應request
//   res.writeHead(200, { "Content-Type": "text/html; charset= utf-8" });
//   res.write("歡迎來到我的網頁");
//   res.end();
//     console.log(req.headers);
// });
// //當啟動伺服器，就會監聽是否有請求進來
// server.listen(3000, () => {
//   console.log("server working on port 3000");
// });

// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log(req.url); //獲取使用者使用什麼url發送請求
// });
// //當啟動伺服器，就會監聽是否有請求進來
// server.listen(3000, () => {
//   console.log("server working on port 3000");
// });

// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html; charset= utf-8" });
//   if (req.url == "/") {
//     res.write("歡迎來到我的網頁");
//   } else {
//     res.write("這是另一個頁面");
//   }
//   res.end();
// });
// server.listen(3000, () => {
//   console.log("server working on port 3000");
// });

// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//   if (req.url == "/") {
//     res.write("歡迎來到我的網頁");
//     res.end();
//   } else if (req.url == "/myFile2") {
//     fs.readFile("myfile2.html", (e, data) => {
//       if (e) {
//         res.write("read data error");
//       } else {
//         res.write(data);
//       }
//       res.end();
//     });
//   } else {
//     res.write("這是不存在的頁面");
//     res.end();
//   }
// });
// server.listen(3000, () => {
//   console.log("server working on port 3000");
// });

//https://www.npmjs.com/package/cowsay
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "hehehehehehehe",
    e: "oO",
    T: "// ",
  })
);

// or cowsay.think()
