// let obj = [
//   { name: "ahmed", age: 28 },
//   { name: "mohamed", age: 22 },
//   { name: "sara", age: 26 },
//   { name: "ahmed", age: 24 },
//   { name: "mohamed", age: 27 },
// ];

// const { forEach } = require("lodash");

// const { map } = require("lodash");

// const { set } = require("lodash");

// const { max } = require("lodash");

// let outputDict = [];

// for (let index = 0; index < obj.length; index++) {
//   for (let j = index + 1; j < obj.length; j++) {
//     if (obj[index]["name"] === obj[j]["name"]) {
//       let doctObj = { name: obj[j]["name"], age: obj[j]["age"] };
//       obj[index]["v"] = 1;
//       obj[j]["v"] = 1;
//       outputDict.push(doctObj);
//     } else {
//       console.log("Index", index, "j", j);
//     }
//   }
// }
// console.log(outputDict);
// // obj.forEach((element) => {
// //   if (!element.v) {
// //     outputDict.push(element);
// //   }
// // });
// // console.log(outputDict);

//sets

// let mySet = new Set([1, 2, 3, "A", "A"]);

// mySet.forEach((element) => console.log(element));

// let iterator = mySet.keys();
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// while (iterator.next().done === false) {
//   console.log(iterator.next().value);
//   // console.
// }
// // m.forEach((element) => {});

//tracking object using weak set
// let obj1 = { name: "ahmed" };
// let obj2 = { name: "ss" };
// let cache = new WeakSet();
// function process(obj) {
//   if (!cache.has(obj)) {
//     cache.add(obj);
//     console.log("Object cached:", obj);
//   } else {
//     console.log("Already Cached Before:", obj);
//   }
// }
// process(obj1);
// process(obj1);
// process(obj1);
// process(obj1);
// process(obj1);
// process(obj1);
// // process(obj2);
// // process(obj2);
// // process(obj2);

// const weakSet = new WeakSet();

// function cacheObject(obj) {
//   weakSet.add(obj);
//   console.log("Object cached:", obj);
// }

// let obj = { id: 1 };
// cacheObject(obj); // Object cached: { id: 1 }

// // The object is still referenced by 'obj', so it is not garbage collected yet.
// console.log(weakSet.has(obj)); // true

// // Now, remove the strong reference to the object
// obj = null;

// // Since 'obj' is now null, there are no more strong references to the object.
// // The object is eligible for garbage collection.

// let myMap = new Map([
//   ["name", "ahmed"],
//   ["age", 28],
//   [
//     "doSomething",
//     function () {
//       return "hello";
//     },
//   ],
// ]);
// console.log(myMap.get("doSomething")());

// let wMapUser = { theName: "ahmed atef" };
// let myWeakMap = new WeakMap();
// myWeakMap.set(wMapUser, "User Object");

// wMapUser = null;
// console.log(myWeakMap);

// Create a new WeakMap instance
// const weakMap = new WeakMap();

// // Create some objects to use as keys
// let obj1 = { name: "Alice" };
// let obj2 = { name: "Bob" };

// // Set key-value pairs in the WeakMap
// weakMap.set(obj1, "Developer");
// weakMap.set(obj2, "Designer");
// obj1 = null;

// console.log(weakMap.has(obj1)); // Output: false (or undefined if obj1 is fully garbage collected)
// console.log(
//   Array.from("1234", function (n) {
//     return +n + +n;
//   })
// );

// function getArguments() {
//   return Array.from(new Set(arguments));
// }

// console.log(getArguments("ahmed", 1, 2, 3, 3, 4));

// let myArr = [1, 2, 3, 4, 5, "A", "B"];

// myArr.copyWithin(1, 5, 6);
// console.log(myArr);

// console.log(arr.filter(function (v) {
//   return v > 5;
// }))

// some elements not a must for every element
// let arr = [50, 60, 70, 80];

// let range = {
//   min: 10,
//   max: 15,
// };
// let checkRange = arr.some(function (element) {
//   return element > this.min && element < this.max;
// }, range);

// console.log(checkRange);

// let check = arr.every((e) => e > 20);
// console.log(check);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let allArrays = [...arr1, ...arr2];
// // console.log(allArrays);
// let newArr = [...allArrays];
// // console.log(newArr);

// console.log(Math.max(...arr1));

//challenge sets and maps
// let n1 = [10, 30, 10, 20];
// let n2 = [10, 20, 30];

// // let m = set([...n1, ...n2]);
// console.log(Math.max(...n1) * [...n1, ...n2].length);
// // console.log();

//Assignment 1
// let setOfNumbers = new Set([10]);
// setOfNumbers.add(20).add(setOfNumbers.size);
// console.log(setOfNumbers);
// console.log([...setOfNumbers].pop());
//Assignment 2
// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// console.log([...new Set(myFriends)].sort());

//Assignment 3
// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };
// let myMap = new Map([]);

// for (let index = 0; index < Object.keys(myInfo).length; index++) {
//   myMap.set(Object.keys(myInfo)[index], Object.values(myInfo)[index]);
// }
// console.log(myMap);
// console.log(myMap.size);
// console.log(myMap.has("role"));

//Assignment 4

// let theNumber = 100020003000;
// console.log(+[...new Set(theNumber.toString())].sort().join(""));
// console.log(
//   +Array.from(new Set([...String(theNumber)]))
//     .sort()
//     .join("")
// );
// // Needed Output
// // 123;

// Assignment 5
// let theName = "Elzero";
// console.log(Array.from(theName));
// console.log([...theName]);
// console.log(new Array(...theName));
// console.log(theName.split(""));
// console.log(Object.assign([], theName));

// // Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

// Assignment 6
// // let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// // let chars = ["Z", "Y", "A", "D", "E", 10, 1];

// let numbers = chars.filter((currentValue) => {
//   return !isNaN(currentValue);
// });
// let charsOnly = chars.filter((currentValue) => {
//   return isNaN(currentValue);
// });
// let allChars = [...numbers, ...charsOnly];
// console.log(allChars.copyWithin(0, numbers.length, numbers.length * 2));

//Assignment 7
// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];
// let all = [];
// console.log([...numsOne, ...numsTwo]);
// console.log(numsOne.concat(numsTwo));
// numsOne.forEach((e) => {
//   all.push(e);
// });

// numsTwo.forEach((e) => {
//   all.push(e);
// });
// console.log(all);
// Needed Output
//   (1, 2, 3, 4, 5, 6)
// ];

//Assignment 8
// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// // Needed Output
// 210;
// console.log(Math.max(...new Set([...n1, ...n2])) * [...n1, ...n2].length);
