//practicing
// // document
// //   .getElementsByTagName("button")[0]
// //   .addEventListener("click", function (e) {
// //     window.localStorage.color = "yellow";
// //   });

// // window.addEventListener("load", function (e) {
// //   this.window.localStorage.color
// //     ? (this.window.document.body.style.backgroundColor =
// //         this.window.localStorage.color)
// //     : "";
// // });

// let lis = document.querySelectorAll("ul li");
// window.addEventListener("load", function (e) {
//   if (this.localStorage.active_color) {
//     console.log("yes");
//     lis.forEach(function (li) {
//       li.classList.remove("active");
//     });

//     let li = this.document.querySelector(
//       `[data-color="${this.window.localStorage.active_color}"]`
//     );
//     li.classList.add("active");
//     document.querySelector(".expirement").style.backgroundColor =
//       this.window.localStorage.active_color;
//   } else {
//     console.log("no");
//   }
// });

// lis.forEach(function (li) {
//   li.addEventListener("click", function (e) {
//     console.log(e.target.dataset.color);

//     lis.forEach(function (li) {
//       li.classList.remove("active");
//     });
//     e.target.classList.add("active");
//     window.localStorage.setItem("active_color", e.target.dataset.color);
//     document.querySelector(".expirement").style.backgroundColor =
//       e.target.dataset.color;
//   });
// });

// let el = document.querySelector("[name = 'user_name']");
// el.addEventListener("blur", function (e) {
//   window.sessionStorage.setItem("user_name", this.value);
// });

// window.addEventListener("load", function (e) {
//   if (!el.value) {
//     el.value = this.window.sessionStorage.user_name;
//   }
// });

//assignment 1
// let colors = document.querySelector('[name = "colors"]');
// let fontStyles = document.querySelector('[name = "font-types"]');
// let fontSizes = document.querySelector('[name = "sizes"]');
// let exp = document.getElementsByClassName("expirement")[0];

// window.addEventListener("load", function (e) {
//   if (
//     window.localStorage.active_color &&
//     window.localStorage.active_font &&
//     window.localStorage.active_size
//   ) {
//     exp.style.color = window.localStorage.active_color;
//     colors.value = window.localStorage.active_color;
//     exp.style.fontFamily = window.localStorage.active_font;
//     fontStyles.value = window.localStorage.active_font;
//     exp.style.fontSize = window.localStorage.active_size;
//     fontSizes.value = window.localStorage.active_size;
//   } else {
//     exp.style.color = colors.dataset.color;
//     exp.style.fontFamily = fontStyles.dataset.font;
//     exp.style.fontSize = fontSizes.dataset.size;
//   }
// });
// colors.addEventListener("change", function (e) {
//   exp.style.color = e.target.value;
//   this.dataset.color = e.target.value;
//   window.localStorage.active_color = e.target.value;
// });

// fontStyles.addEventListener("change", function (e) {
//   exp.style.fontFamily = e.target.value;
//   this.dataset.font = e.target.value;
//   window.localStorage.active_font = e.target.value;
// });
// fontSizes.addEventListener("change", function (e) {
//   exp.style.fontSize = e.target.value;
//   this.dataset.size = e.target.value;
//   window.localStorage.active_size = e.target.value;
// });
//assignment 2
for (const element of document.getElementsByTagName("input")) {
  element.addEventListener("change", function (e) {
    if (element.hasAttribute("data-user")) {
      window.sessionStorage.setItem("user", element.value);
    } else if (element.hasAttribute("data-password")) {
      window.sessionStorage.setItem("password", element.value);
    } else if (element.hasAttribute("data-id")) {
      window.sessionStorage.setItem("id", element.value);
    }
  });
}

let city = document.querySelector(`[name = "city"]`);

city.addEventListener("change", function (e) {
  window.sessionStorage.setItem("city", e.target.value);
});

window.addEventListener("load", function (e) {
  for (const element of document.getElementsByTagName("input")) {
    if (this.window.sessionStorage.user && element.hasAttribute("data-user")) {
      element.value = this.window.sessionStorage.user;
    }
    if (
      this.window.sessionStorage.password &&
      element.hasAttribute("data-password")
    ) {
      element.value = this.window.sessionStorage.password;
    }
    if (this.window.sessionStorage.id && element.hasAttribute("data-id")) {
      element.value = this.window.sessionStorage.id;
    }
  }
  if (this.window.sessionStorage.city) {
    city.value = this.window.sessionStorage.city;
  }
});
