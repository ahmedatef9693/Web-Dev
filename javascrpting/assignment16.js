// console.log("hello ahmed");
// window.location.assign("https://www.google.com");

//dot notation cannot access dynamic property name
// let myvar = "theName";
// let user = {
//   theName: "ahmed",
// };

// console.log(user[myvar]);

// "use strict";
// it removed the context of the this and doesnt allow making variables without let and var
//arrow function reomves the context of this object
// m = 5;
// console.log(m);

// let user = {
//   name: "ahmed",
//   age: 50,
//   doubleAge: function () {
//     return this.age * 2;
//   },
// };

// //prototype of the object
// let copyObj = Object.create(user);
// copyObj.age = 30;
// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());

// let obj1 = {
//   prop1: 1,
//   prop2: 2,
// };

// // let obj2 = {
// //   prop1: 300,
// //   prop4: 4,
// // };

// // let copyObj = Object.assign(obj1, obj2);
// // console.log(copyObj);

// let copyObj2 = Object.assign({}, obj1, {
//   method1: function () {
//     return "ss";
//   },
// });

// console.log(copyObj2);

// Method One
// Create Your Object Here
// let objMethodOne = new Object({ property: "method1" });
// console.log(objMethodOne.property); // "Method One"

// // Method Two
// // Create Your Object Here
// let objMethodTwo = { property: "method2" };
// console.log(objMethodTwo.property); // "Method Two"

// // Method Three
// // Create Your Object Here
// let objMethodThree = Object.create(objMethodTwo);
// console.log(objMethodThree.property); // "Method Three"

// // Method Four
// // Create Your Object Here
// let objMethodFour = Object.assign({}, objMethodOne);
// console.log(objMethodFour.property); // "Method Four"

// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };

// // Create Your Object Here in One Line
// let finalObject = Object.assign({ a }, threeNums, twoNums);
// console.log(finalObject);

// /*
//   a: 1
//   b: 2
//   c: 3
//   d: 4
//   e: 5
//   f: 6
// */

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;
console.log(objectLength);
for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(
    `The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]]["publisher"]}`
  );
  console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")) {
    console.log("- Game Has Releases");
    console.log(
      `First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`
    );
    console.log(
      `Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`
    );
    console.log(
      `Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`
    );
  }
  console.log("#".repeat(20));
}

// Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"
