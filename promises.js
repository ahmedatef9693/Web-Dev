// function connectToDatabase() {
//   return new Promise(function (resolve, reject) {
//     let connect = true;
//     let databaseElements = ["ahmed", "sara", "Nadia", "atef"];
//     connect ? resolve(databaseElements) : reject("Connection Failed");
//   });
// }
// connectToDatabase()
//   .then((message) => {
//     console.log(message);
//     message.length = 3;
//     return message;
//   })
//   .then((message) => {
//     console.log(message);
//     message.length = 2;
//     return message;
//   })
//   .then((message) => {
//     console.log(message);
//     message.length = 1;
//     return message;
//   })
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("done");
//   });

//xml request
// const getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.open("GET", apiLink);
//     myRequest.send();
//     myRequest.addEventListener("load", function () {
//       if (this.status === 200) {
//         resolve(JSON.parse(myRequest.responseText));
//       } else {
//         reject("Error In Api Link");
//       }
//     });
//   });
// };

// getData("https://api.github.com/users/elzerowebschool/repos")
//   .then((response) => {
//     response.length = 10;
//     return response;
//   })
//   .then((response) => {
//     console.log(response[5].name);
//   });
// // let myRequest = new XMLHttpRequest();
// // myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// myRequest.send();
// console.log(myRequest);

// let promises = [];
// for (let index = 0; index < 3; index++) {
//   promises.push(
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject(`Iam The ${index + 1} Promise`);
//       }, (index + 1) * 1000);
//     })
//   );
// }

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Iam The First Promise");
//   }, 10000);
// });

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Iam The Second Promise");
//   }, 50);
// });
// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Iam The Third Promise");
//   }, 100);
// });

//shows all data if all resolved
// Promise.all([promise1, promise2, promise3]).then((resolvedData) =>
//   console.log(resolvedData)
// );

//shows all data and its state
// Promise.allSettled([promise1, promise2, promise3])
//   .then((resolvedData) => console.log(resolvedData[2]))
//   .then((data) => {
//     // console.log(data[2]);
//   });

//shows first to be resolved or rejected
// Promise.race([promise1, promise2, promise3])
//   .then((resolvedData) => console.log(resolvedData))
//   .then((data) => {
//     // console.log(data[2]);
//   });

// async function getUserData() {
//   let users = ["ahmed"];

//   if (users.length > 0) {
//     return users;
//   } else {
//     return "No Users Found";
//   }
// }

// getUserData().then((data) => {
//   console.log(data);
// });

// fetch("https://api.github.com/users/elzerowebschool/repos")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

// new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(3);
// }).then((response) => {
//   console.log(response);
// });

// console.log(2);

//Assignment 1
// let jsonData = [
//   {
//     userId: 10,
//     title: "Article Title Number 1",
//     description: "Article Description Number 1",
//   },
//   {
//     userId: 5,
//     title: "Article Title Number 2",
//     description: "Article Description Number 2",
//   },
//   {
//     userId: 5,
//     title: "Article Title Number 3",
//     description: "Article Description Number 3",
//   },
//   {
//     userId: 5,
//     title: "Article Title Number 4",
//     description: "Article Description Number 4",
//   },
//   {
//     userId: 5,
//     title: "Article Title Number 5",
//     description: "Article Description Number 5",
//   },
//   {
//     userId: 5,
//     title: "Article Title Number 6",
//     description: "Article Description Number 6",
//   },
//   {
//     userId: 25,
//     title: "Article Title Number 7",
//     description: "Article Description Number 7",
//   },
//   {
//     userId: 25,
//     title: "Article Title Number 8",
//     description: "Article Description Number 8",
//   },
//   {
//     userId: 15,
//     title: "Article Title Number 9",
//     description: "Article Description Number 9",
//   },
//   {
//     userId: 15,
//     title: "Article Title Number 10",
//     description: "Article Description Number 10",
//   },
// ];

// function createContent(jsonData) {
//   return new Promise((resolve, reject) => {
//     if (jsonData.length > 0) {
//       resolve(jsonData);
//     } else {
//       reject(Error("No Data Found"));
//     }
//   });
// }
// window.addEventListener("load", function (e) {
//   createContent(jsonData)
//     .then((responseData) => {
//       responseData.forEach((object) => {
//         let div = document.createElement("div");
//         let header = document.createElement("h3");
//         header.innerHTML = object.title;
//         let paragrah = document.createElement("p");
//         paragrah.innerHTML = object.description;
//         div.appendChild(header);
//         div.appendChild(paragrah);
//         document.body.appendChild(div);
//       });
//     })
//     .catch((rejectedData) => {
//       console.log(`Rejected : ${rejectedData}`);
//     });
// });

// //Assignment 2
// function cloringDivs() {
//   let rgbColors = [];
//   for (let i = 0; i < 3; i++) {
//     rgbColors.push(Math.floor(Math.random() * 255));
//   }
//   return rgbColors;
// }
// async function fetchData(apiLink) {
//   let response = await fetch(apiLink);

//   if (response.status === 200) {
//     return response.json();
//   } else {
//     throw new Error("Error While Accessing Api");
//   }
// }
// function renderData(jsonData) {
//   jsonData.forEach((object) => {
//     let div = document.createElement("div");
//     let header = document.createElement("h3");
//     header.innerHTML = object.name;
//     let paragrah = document.createElement("p");
//     paragrah.innerHTML = object.description;
//     div.appendChild(header);
//     div.appendChild(paragrah);

//     div.style.backgroundColor = `rgb(${cloringDivs().join(",")})`;
//     document.body.appendChild(div);
//   });
// }
// window.addEventListener("load", async function (event) {
//   let data = await fetchData(
//     "https://api.github.com/users/elzerowebschool/repos"
//   );
//   renderData(data);
// });

// fetch("https://api.github.com/users/elzerowebschool/repos")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

Promise.all([
  fetch("https://jsonplaceholder.typicode.com/users"),
  fetch("https://jsonplaceholder.typicode.com/posts"),
  fetch("https://jsonplaceholder.typicode.com/photos"),
])
  .then(function (responses) {
    return Promise.all(
      responses.map(function (response) {
        return response.json();
      })
    );
  })
  .then(function (responses) {
    console.log(responses);
  });
