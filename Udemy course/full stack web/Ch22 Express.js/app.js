const express = require("express"); //modules.exports = express()，是一個function
const app = express(); //app是一個express物件

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log("正在經過middleware");
  next();
});
app.use((req, res, next) => {
  console.log("正在經過2nd middleware");
  next();
});

app.use((req, res, next) => {
  if (req.authenticate == false) {
    console.log("請先登入以查看頁面");
  } else {
    next();
  }
});
app.set("view engine", "ejs");

//HTTP request
app.get("/", (req, res) => {
  const languages = [
    { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
    { name: "Java", rating: 9.4, popularity: 8.5, trending: "hot" },
    { name: "C++", rating: 9.2, popularity: 7.7, trending: "hot" },
    { name: "PHP", rating: 9.0, popularity: 5.7, trending: "decreasing" },
    { name: "JS", rating: 8.5, popularity: 8.7, trending: "hot" },
  ];
  res.render("index", { languages });
});
// app.get("/:name", (req, res) => {
//   let { name } = req.params;
//   res.render("index", { name });
// });

// app.get("/", (req, res) => {
//   res.send("歡迎來到網站首頁");
// });

app.get("/anotherPage", (req, res) => {
  res.send("歡迎來到資訊頁");
});

app.get("/fruit/:someFruit", (req, res) => {
  res.send(req.params.someFruit);
});

// app.get("/example", (req, res) => {
//   res.sendFile(__dirname + "/example.html");
// });

app.get("/example", (req, res) => {
  let { name, age } = req.query;
  res.render("form_response", { name, age });
});

app.get("/formHandling", (req, res) => {
  console.log(req.body);
});

app.get("*", (req, res) => {
  res.send("404 page not found");
});

//port, callback
app.listen(3000, () => {
  console.log("伺服器正在聆聽port 3000.....");
});
