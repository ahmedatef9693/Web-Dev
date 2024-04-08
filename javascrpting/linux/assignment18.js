// let user = document.querySelector("[name = 'user']");
// let data = document.querySelector(".datavalue");
// window.onload = function () {
//   user.focus();
// };

// data.onblur = function () {
//   //   window.location.assign("https://www.google.com");
// };

// data.onclick = function () {
//   user.classList.toggle("class-one");
// };

// let div = document.getElementById("myDiv");
// // div.style.cssText = "background-color: black";
// document.styleSheets[3].cssRules[0].style.removeProperty("background-color");
// document.styleSheets[3].cssRules[0].style.setProperty(
//   "background-color",
//   "blue"
// );
// console.log();
// let p = document.createElement("p");
// p.innerHTML = "paragrah";
// div.before("hello before");
// div.after("hello after");
// div.append(p);
// div.prepend(p);

// console.log(div.nextSibling);
// console.log(div.parentElement);

// console.log(div);
// let div2 = div.cloneNode(true);
// div2.id = "clonedDiv";
// div2.children[0].id = "p_id";
// console.log(div2.children[0]);

// div.onclick = function (e) {
//   let newDiv = this.cloneNode(true);
//   newDiv.classList.add("newDivClass");
//   document.body.appendChild(newDiv);
// };

// window.addEventListener("click", function (event) {
//   //   console.log(event.target);
//   if (event.target.classList.contains("newDivClass")) {
//     console.log("iam cloned one");
//   } else {
//     console.log("None");
//   }
// });

//assignment 2
// var classes = "";
// document
//   .querySelector(".classes-to-add")
//   .addEventListener("blur", function (e) {
//     if (this.value !== "") {
//       classes = String(this.value).split(" ");
//       let elementsToAdded = [];
//       classes.forEach((classElement) => {
//         document
//           .querySelector("[title = 'Current']")
//           .classList.add(classElement);
//         let spanElement = document.createElement("span");
//         let spanText = document.createTextNode(classElement);
//         spanElement.appendChild(spanText);
//         elementsToAdded.push(spanElement);
//       });
//       elementsToAdded.sort(function (a, b) {
//         let textA = a.textContent.trim().toLowerCase();
//         let textB = b.textContent.trim().toLowerCase();
//         //left comes after right gives positive number
//         return textA.localeCompare(textB);
//       });
//       document.querySelector(".classes-list").lastElementChild.textContent = "";
//       elementsToAdded.forEach(function (element) {
//         document
//           .querySelector(".classes-list")
//           .lastElementChild.appendChild(element);
//       });
//       this.value = "";
//     }
//   });

// document
//   .querySelector(".classes-to-remove")
//   .addEventListener("blur", function (e) {
//     if (this.value !== "") {
//       let classes = String(this.value).split(" ");
//       classes.forEach((classElement) => {
//         document
//           .querySelector("[title = 'Current']")
//           .classList.remove(classElement);
//       });
//       let elementsToRemove = [];
//       for (const chld of document.querySelector(".classes-list")
//         .lastElementChild.children) {
//         classes.forEach((classElement) => {
//           if (chld.textContent.trim() === classElement) {
//             elementsToRemove.push(chld);
//           }
//         });
//       }
//       elementsToRemove.forEach((element) => {
//         element.remove();
//       });
//       if (
//         document.querySelector(".classes-list").lastElementChild.children
//           .length === 0
//       ) {
//         document.querySelector(".classes-list").lastElementChild.textContent =
//           "No Classes To Show";
//       }
//       this.value = "";
//     }
//   });
//assignment 3
// let paragraphToRmove = document.getElementsByTagName("p")[0];
// paragraphToRmove.remove();
// let myDiv = document.getElementsByTagName("div")[0];
// let start_div = createDiv("start");
// myDiv.parentElement.prepend(start_div);
// let end_div = createDiv("end");
// myDiv.parentElement.append(end_div);

// function createDiv(name) {
//   let current_div = document.createElement("div");
//   current_div.innerText = String(name)
//     .charAt(0)
//     .toUpperCase()
//     .concat(String(name).substring(1));
//   current_div.className = name;
//   current_div.title = `${name} Element`;
//   current_div.setAttribute(
//     "data-value",
//     String(name).charAt(0).toUpperCase().concat(String(name).substring(1))
//   );
//   return current_div;
// }

//assignment 4
// let arr = document
//   .getElementsByTagName("div")[0]
//   .lastChild.textContent.split("\n");
// arr = arr
//   .filter(function (el) {
//     el = el.trim();
//     return el.trim();
//   })
//   .map(function (el) {
//     return el.trim();
//   });

// console.log(arr[0]);

// assignment 5

// window.addEventListener("click", function (e) {
//   console.log(`this is ${e.target.localName}`);
// });
