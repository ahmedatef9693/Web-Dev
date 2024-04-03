/*
      function addition(element) {
        return element + element;
      }
      let mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      let new_arr = mynums.map(addition);

      console.log(new_arr);
      */
// /*
//       let swappingCases = "elZERo";
//       let sw = swappingCases
//         .split("")
//         .map(function (element) {
//           return element.toLowerCase() === element
//             ? element.toUpperCase()
//             : element.toLowerCase();
//         })
//         .join("");
//       console.log(sw);
//       let invertedNumbers = [1, -10, -20, 15, 100, -30];
//       let new_arr = invertedNumbers.map(function (el) {
//         return -el;
//       });
//       console.log(new_arr);

//       let ignoreNumbers = "Elz123er4o";
//       let ignore_array = ignoreNumbers
//         .split("")
//         .map(function (el) {
//           return isNaN(el) ? el : "";
//         })
//         .join("");
//       console.log(ignore_array);*/

// let friends = ["ahmed", "atef", "sara", "mohamed"];
// let filteredFriends = friends.filter((element) => {
//   return element.startsWith("a");
// });
// console.log(filteredFriends);
// let sentence = "I Love Foood Code Too Playing Much";

// let filteredSentence = sentence
//   .split(" ")
//   .filter((element) => {
//     return element.length <= 4;
//   })
//   .join(" ");

// console.log(filteredSentence);

// let mix = "A13BS2ZX";

// let filteredMix = mix
//   .split("")
//   .filter((element) => {
//     return !isNaN(element);
//   })
//   .map((e, index, arr) => {
//     return e * e;
//   })
//   .join("");
// console.log(filteredMix);

// let nums = [1, 2, 3, 4, 5];

// let sums = nums.reduce((acc, element, index, arr) => {
//   console.log("accumulator = ", acc);
//   console.log("current element = ", element);
//   console.log("current index = ", index);
//   console.log("arr => ", arr);
//   console.log("###################################");
//   return acc + element;
// }, 0);

// console.log(sums);

// let theBiggest = [
//   "Bla",
//   "Propaganda",
//   "Propaganda_ooo",
//   "Other",
//   "AAA",
//   "Battery",
//   "Test",
// ];

// let sums = theBiggest.reduce((acc, element, index, arr) => {
//   console.log("accumulator = ", acc);
//   console.log("current element = ", element);
//   console.log("current index = ", index);
//   console.log("arr => ", arr);
//   console.log("###################################");
//   //   let needed = ;
//   return acc.length > element.length ? acc : element;
// });
// console.log(sums);
// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let filtered = removeChars
//   .filter((element) => {
//     return element !== "@";
//   })
//   .reduce((acc, el) => {
//     return acc + el;
//   });
// console.log(filtered);

// challenge
// let mystring = "1,2,3,EE,l,z,e,r,o,_,Web,_,S,c,h,o,o,l,2,0,Z";

// let final_data = mystring
//   .split(",")
//   .filter((element) => {
//     return isNaN(element);
//   })
//   .toString()
//   .substring(true)
//   .split(",")
//   .filter((final_element, index, arr) => {
//     return index < arr.length - !false ? final_element : "";
//   })
//   .join("")
//   .replace("_", " ")
//   .replace("_", " ");
// console.log(final_data);

// assignment 1
// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// // Elzero

// let mix_result = mix
//   .map((element) => {
//     return isNaN(element) ? element : "";
//   })
//   .reduce((acc, current_value) => {
//     let st = "";
//     if (acc) {
//       st += acc;
//     }
//     if (current_value) {
//       st += current_value;
//     }
//     return st;
//   });

// console.log(mix_result);
// assignment2
// let myString = "EElllzzzzzzzeroo";

// Elzero

// let newString = myString
//   .split("")
//   .reduce((acc, current, curr_ind) => {
//     if (acc.indexOf(current) === -1) {
//       acc.push(current);
//     }
//     return acc;
//   }, [])
//   .join("");
// console.log(newString);

// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let newArr = myArray
//   .reduce(function (acc, el, ind, arr) {
//     return acc.concat(el);
//   }, [])
//   .join("");

// // Elzero
// console.log(newArr);

// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// // [-1, -10, 10, 20, -5, -3]
// let myArr = numsAndStrings
//   .filter((element) => {
//     return !isNaN(element);
//   })
//   .map((element) => {
//     return -element;
//   });
// console.log(myArr);
// let nums = [2, 12, 11, 5, 10, 1, 99];

// // 500
// let newArr = nums.reduce((acc, curr, ind) => {
//   // console.log("acc", acc);
//   // console.log("curr", curr);
//   return curr % 2 !== 0 ? acc + curr : acc * curr;
// }, 1);
// console.log(newArr);
