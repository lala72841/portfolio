const fs = require("fs");
fs.writeFile("myFile.txt", "今天天氣不錯", (e) => {
  if (e) throw e;
  console.log("文件已撰寫完畢");
});

fs.readFile("myFile.txt", "utf-8", (e, data) => {
  if (e) throw e;
  console.log("讀取完畢：" + data);
});

fs.readFile("hkdfuoisaud.txt", "utf-8", (e, data) => {
  if (e) throw e;
  console.log("讀取完畢：" + data);
});
