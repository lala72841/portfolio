// function sayHi(name, age) {
//   console.log("Hello " + name + "," + age + " years old");
// }
// let name = window.prompt("Enter name:");
// let age = window.prompt("Enter age:");
// sayHi(name, age);

// function circle(radius) {
//   return radius ** 2 * 3.14;
// }
// console.log(circle(10) + circle(5));

// function celcius_to_farenheit(c_temp) {
//   return c_temp * 1.8 + 32;
// }
// let c_temp = window.prompt("請輸入攝氏溫度：");
// console.log(
//   c_temp + "℃" + "換算後的溫度為" + celcius_to_farenheit(c_temp) + "℉"
// );

// let friends = ["Amy", "Ben", "Coco", "David", "Eva"];
// friends.push("Funny");
// console.log(friends);

// let myArr = [
//   ["name", "address", "age"],
//   ["Mike", "Taiwan", 35],
//   ["Grace", "USA", 26],
// ];
// console.log(myArr[1][2]);

// let student = {
//   first_name: "Claire",
//   last_name: "Liao",
//   age: 23,
//   is_married: false,

//   sayHi() {
//     console.log(this.first_name + " says Hi");
//   },
//   speaks(sentence) {
//     console.log(this.first_name + " says " + sentence);
//   },
// };

// console.log(student.last_name);
// console.log(student["last_name"]);
// student.sayHi();
// student.speaks("Good morning");

// for (let i = 0; i < 11; i += 3) {
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// const friends = ["Harry", "Ron", "Snap", "Mike", "Grace"];
// reversed_friends = [];

// for (let i = 0; i < 5; i++) {
//     reversed_friends[i] = friends[5-i];
// }
// console.log(reversed_friends);

// function findBiggest(arr) {
//   let biggestNumber = arr[0];
//   for (let i = 1; i <= arr.length; i++) {
//     if (arr[i] > biggestNumber) {
//       biggestNumber = arr[i];
//     }
//   }
//   return biggestNumber;
// }

// function addUpTo(n) {
//   let result = 0;
//   for (let i = 1; i <= n; i++) {
//     result += i;
//   }
//   return result;
// }

// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.pow(2, 3));
// console.log(Math.random(0, 1));
// console.log(Math.ceil(Math.PI));
// console.log(Math.floor(Math.PI));

// let wrong = true;
// let key = 50;
// do {
//   let guess = Number(window.prompt("Guess:"));
//   if (guess == key) {
//     wrong = true;
//     break;
//   }
// } while (wrong);
// window.alert("Correct!");

// let ans = Math.floor(Math.random());
// let ans = 99;
// while (true) {
//   let guess = Number(window.prompt("Guess:"));
//   if (guess == ans) {
//     window.alert("Correct!");
//     break;
//   } else if (guess > ans) {
//     window.alert("Smaller");
//   } else if (guess < ans) {
//     window.alert("Larger");
//   }
// }

let min = 0;
let max = 100;
// let ans = Math.floor(Math.random());
let ans = 99;
while (true) {
  let guess = Number(window.prompt("Guess between " + min + " and " + max));
  if (guess < min || guess > max) {
    window.alert("無效猜測，請重新輸入");
    continue;
  }
  if (guess == ans) {
    window.alert("Correct!");
    break;
  } else if (guess > ans) {
    window.alert("Smaller");
    max = guess;
  } else if (guess < ans) {
    window.alert("Larger");
    min = guess;
  }
}
