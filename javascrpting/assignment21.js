// // // // console.log("hello world");
// // // let myarr = [, 2, 3, 4];

// // // const { maxBy } = require("lodash");

// // // let [a = "None", b, c, d] = myarr;
// // // console.log(a);
// // // console.log(b);
// // // console.log(c);
// // // console.log(d);

// // // // console.log(...myFriends);

// // // let arr = [1, 2, 3, 4];

// // // let arr2 = [...arr];

// // // console.log(arr2);

// // // let myFriends = [
// // //   "Ahmed",
// // //   "Sayed",
// // //   "Ali",
// // //   ["Shady", "Amr", ["Mohamed", "Gamal"]],
// // // ];

// // // let [, , , [, , [a, b]]] = myFriends;
// // // console.log(a);
// // // console.log(b);
// // // const stack = new Stack();

// // // let arr = [];
// // // let book = "Video";
// // // let video = "Book";

// // // arr.push(video);
// // // video = book;
// // // book = arr[0];

// // // [book, video] = [video, book];

// // // console.log(book);
// // // console.log(video);

// // //Destructuring Arrays
// // // let arr = [1, 2, 3, 4, 5];

// // // let [a, b, c, d] = arr;
// // // console.log(a);
// // // console.log(b);
// // // console.log(c);
// // // console.log(d);

// // //Destructuring Objects

// // let user = {
// //   name: "ahmed",
// //   age: 28,
// //   position: "Junior Developer",
// //   theColor: "red",
// //   skills: {
// //     html: 70,
// //     css: 50,
// //   },
// // };

// // // let { name, age } = user;
// // // console.log(name, age);

// // // let name = "saeed";
// // // let age = 15;

// // // let {
// // //   name: myName,
// // //   age: myAge,
// // //   theColor: co = "Black",
// // //   skills: { html: h, css: c },
// // // } = user;
// // // console.log(c);

// // // let { html: skillOne, css: skillTwo } = user.skills;

// // // console.log(skillOne);

// // //Destructuring functions
// // // showValues(user);

// // // function showValues({ position, skills: { html: h, css: c } } = user) {
// // //   console.log(h, c);
// // // }

// //Destructuring Challenge
// let chosen = 2;
// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Osama", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// showData(myFriends, chosen);

// function showData(myFriends, chosen) {
//   if (chosen > 0 && chosen <= 3) {
//     let {
//       title,
//       age,
//       available,
//       skills: [, skillTwo],
//     } = myFriends[chosen - 1];
//     console.log(title);
//     console.log(age);
//     available ? console.log("Available") : console.log("Not Available");
//     console.log(skillTwo);
//   }
// }

// Destructuring Assignment 1

// let myNumbers = [1, 2, 3, 4, 5];

// // Write Your Destructuring Assignment Here
// [a, , , , e] = myNumbers;
// console.log(a * e); // 5

// Destructuring Assignment 2

// let mySkills = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   ["PHP", "Python", ["Django", "Laravel"]],
// ];

// // Write Your Destructuring Assignment Here
// [a, b, c, [d, e, [f, g]]] = mySkills;
// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// Destructuring Assignment 3

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// // Play With Arrays To Prepare For Destructuring
// // Write Your Destructuring Assignment Here
// arr3 = arr3.filter(function (e) {
//   return e !== "Haytham";
// });
// console.log(arr3);
// [a, b, c = arr1[0]] = arr3;
// // console.log(a, b);
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed

// Destructuring Assignment 4
// const member = {
//   age: 30,
//   working: false,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };

// // Write Your Destructuring Assignment Here
// let {
//   age: a,
//   working: w,
//   country: c,
//   hobbies: [h1, , h3],
// } = member;
// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// // My Age Is 30 And Iam Not Working

// console.log(`I Live in ${c}`);
// // I Live in Egypt

// console.log(`My Hobbies: ${h1} And ${h3}`);
// // My Hobbies: Reading And Programming

// Destructuring Assignment 5

// const game = {
//   title: "YS",
//   developer: "Falcom",
//   releases: {
//     "Oath In Felghana": ["USA", "Japan"],
//     "Ark Of Napishtim": {
//       US: "20 USD",
//       JAP: "10 USD",
//     },
//     Origin: "30 USD",
//   },
// };

// // console.log(Object.keys(game.releases));

// // Write Your Destructuring Assignment/s Here
// let {
//   title: t,
//   developer: d,
//   releases: { Origin: or },
// } = game;
// console.log(`My Favourite Games Style Is ${t} Style`);
// // My Favourite Games Style Is YS Style
// console.log(`And I Love ${d} Games`);
// // And I Love Falcom Games
// let { o = Object.keys(game.releases)[0], a = Object.keys(game.releases)[1] } =
//   game;
// let [u, j] = game.releases[Object.keys(game.releases)[0]];
// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// // My Best Release Is Oath In Felghana It Released in USA & Japan

// console.log(`Although I Love ${a}`);
// // // Although I Love Ark Of Napishtim
// let { US: u_price, JAP: j_price } = game.releases[a];

// console.log(`${a} Price in USA Is ${u_price}`);
// // // Ark Of Napishtim Price in USA Is 20 USD

// console.log(`${a} Price in Japan Is ${j_price}`);
// // // Ark Of Napishtim Price in Japan Is 10 USD

// console.log(`Origin Price Is ${or}`);
// // // Origin Price Is 30 USD

// Destructuring Assignment 6

let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

let [a, b, c] = myFriends;

let neededObject = myFriends[chosen - 1];
let {
  title,
  age,
  available,
  skills: [, secondSkill],
} = neededObject;
available = available ? "Available" : "Not Available";
// If chosen === 1
console.log("\n", title, "\n", age, "\n", available, "\n", secondSkill, "\n");
("Osama");
39;
("Available");
("CSS");

// If chosen === 2

("Ahmed");
25;
("Not Available");
("Django");

// If chosen === 3

("Sayed");
33;
("Available");
("Laravel");
