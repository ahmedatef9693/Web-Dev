// console.log("hello world");
// Swal.fire({
//   title: "Well Done!",
//   text: "You clicked the button!",
//   icon: "success",
// });

// setTimeout(messageOut, 3000, "ahmed", 28);

// function messageOut(userName, age) {
//   console.log(`message for ${userName} whose age = ${age}`);
// }

// window.location.href = "#sec02";
// console.log(location.hostname);
// console.log(location.host);
// console.log(location.protocol);
// location.replace("https://www.google.com");
// history.back();
//go forward
// history.go(1);
// //go backward
// history.go(-1);

// window.scrollTo({
//   left: 1200,
//   top: 1500,
//   behavior: "smooth",
// });

// let btn = document.getElementsByTagName("button")[0];
// window.addEventListener("scroll", function () {
//   if (this.window.scrollY >= 600) {
//     btn.style.transition = "opacity 2s linear 1s";
//     btn.style.opacity = "1";
//     // btn.style.visibility = "visible";
//   } else {
//     // btn.style.transition = "";
//     // btn.style.display = "none";
//     btn.style.opacity = "0";
//     // btn.style.visibility = "hidden";
//   }
// });
// btn.addEventListener("click", function () {
//   window.scrollTo({
//     left: 0,
//     top: 0,
//     behavior: "smooth",
//   });
// });

//assignment 1
// let entry = prompt(`Enter Numbers From - To `);
// entry = entry.split("-");
// entry = entry.filter((element) => {
//   return Number(element);
// });

// if (entry.length === 2) {
//   for (let index = Math.min(...entry); index <= Math.max(...entry); index++) {
//     console.log(index);
//   }
// }

// //assignment 2
// const windowFeatures = "left=100,top=100,width=320,height=320";
// window.addEventListener("load", function () {
//   setTimeout(function () {
//     let popUp = window.open("", "Welcome to elzero web school", windowFeatures);
//     popUp.addEventListener("load", function () {
//       console.log("done loading");
//       let el = this.document.createElement("div");
//       el.innerHTML = `<Center><h5>Welcome</h5><p>Welcome to elzero web school</p></Center>`;
//       this.document.body.appendChild(el);
//     });
//   }, 5000);
// });

//assignment 3 4 5

// let div = document.getElementById("counter");
// const windowFeatures = "left=100,top=100,width=320,height=320";
// let id = setInterval(function () {
//   if (Number(div.innerHTML) === 5) {
//     window.open("https://elzero.org/", "_blank", windowFeatures);
//     div.innerHTML -= 1;
//     // window.location.href = "https://elzero.org/";
//   } else if (Number(div.innerHTML) === 0) {
//     clearInterval(id);
//   } else {
//     div.innerHTML -= 1;
//   }
// }, 1000);
