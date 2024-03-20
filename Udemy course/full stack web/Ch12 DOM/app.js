// console.log(this);

// window.alert(); // alert is a method of the window object

// function sayHelloToUser() {
//   alert("Hi");
// }
// let interval = window.setInterval(sayHelloToUser, 3000); // execute every 3 sec
// window.clearInterval(interval);

// let myHeading = document.getElementById("myHeading1");
// console.log(myHeading);

// let paragraph = document.getElementsByClassName("here");
// console.log(paragraph);

// let first_found_paragraph = document.querySelector(".here");
// console.log(first_found_paragraph);

// let first_found_paragraph_1 = document.querySelector("a.here");
// console.log(first_found_paragraph_1);

// let found_elements = document.querySelectorAll(".here");
// console.log(found_elements);

// let heres = document.getElementsByClassName("here");
// let heress = document.querySelectorAll(".here");
// console.log(heres);
// console.log(heress);

// let body = document.querySelector("body");
// let p = document.createElement("p");
// p.innerText = "this is a new p";
// p.classList.add("here");
// body.appendChild(p); // 模仿user觸發"新增一個p tag"

// console.log("改變DOM後.....");
// console.log(heres);
// console.log(heress);

// let body = document.querySelector("body");
// console.log(body.childNodes);
// console.log(body.children);

// function react() {
//   window.alert("有人正在點擊畫面");
// }
// window.addEventListener("click", react);

// window.addEventListener("click", function () {
//   window.alert("有人正在點擊畫面");
// });

// (function addition(a, b) {
//   console.log(a + b);
// })(10, 5);

// ((a, b) => {
//   console.log(a + b);
// })(10, 5);

// let myLuckyNumbers = [1, 2, 3, 4, 5, 6, 7];
// function add(i) {
//   console.log(i + 3);
// }
// myLuckyNumbers.forEach(add);

// myLuckyNumbers.forEach(function (i) {
//   console.log(i + 3);
// });

// myLuckyNumbers.forEach((n) => {
//   console.log(n + 3);
// });

// heress.forEach((n) => {
//   console.log(n);
// });

// let myButton = document.querySelector("#my-btn");
// myButton.addEventListener("click", () => {
//   window.alert("有人點擊按鈕");
// });

// let mybody = document.querySelector("body");
// let myH1 = document.createElement("h1");
// myH1.innerHTML = "<a href='https://google.com'>這是我的h1</a>";
// mybody.appendChild(myH1);

// let firstP = document.querySelector("p");
// firstP.classList.add("blue");
// firstP.classList.remove("red");
// console.log(firstP.classList);

// firstP.addEventListener("click", () => {
//   firstP.classList.toggle("red");
// });

// let firstA = document.querySelector("a");
// console.log(firstA.getAttribute("href"));

// let btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   let a = document.querySelector("a");
//   a.remove();
// });

// let btn = document.querySelector("button");
// btn.style.backgroundColor = "green";

let btn = document.querySelector("button");
btn.style = "background-color:green; color:white";
btn.addEventListener("click", () => {
  let a = document.querySelector("a");
  a.remove();
});
