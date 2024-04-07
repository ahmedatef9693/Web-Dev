// for (let i = 0; i < 100; i++) {
//   let myDiv = document.createElement("div");
//   myDiv.className = `product${i + 1}`;
//   let h3 = document.createElement("h3");
//   let h3Text = document.createTextNode(`Product ${i + 1}`);
//   let p = document.createElement("p");
//   let pText = document.createTextNode(`Product ${i + 1} Details`);
//   h3.appendChild(h3Text);
//   p.appendChild(pText);
//   myDiv.appendChild(h3);
//   myDiv.appendChild(p);
//   document.body.appendChild(myDiv);
//   console.log("Done");
// }

// let div1 = document.getElementsByClassName("product1")[0];
// div1.innerHTML += "555";

// let div2 = document.getElementsByClassName("div2")[0];
// console.log(div2.firstElementChild);

// window.onscroll = function () {
//   console.log("scrolled");
// };

// window.onresize = function () {
//   console.log("resized");
// };

// let ele = document.querySelector("[name='js']");
// ele.textContent = "hello ";
// console.log();

//assignment1
// let elements = document.querySelectorAll("div img");
// elements.forEach(function (element) {
//   element.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   element.alt = "Elzero Logo";
// });
// console.log(ele.length);

//assignment 2
// let el = document.querySelector("[name = 'dollar']");
// el.onchange = function () {
//   let res = document.querySelector(".result");
//   res.textContent = `{${this.value}} USD Dollar = {${
//     this.value * 47.33
//   }} Egyptian Pound`;
// };

//assignment 3

// let one_element = document.getElementsByClassName("one")[0];
// let two_element = document.getElementsByClassName("two")[0];
// let swap_var = one_element.textContent;
// one_element.textContent = two_element.textContent;
// one_element.setAttribute("title", two_element.title);
// two_element.setAttribute("title", swap_var.toLowerCase());
// two_element.textContent = swap_var + " 2";

//assignment 4
// let imgs = document.images;
// console.log(imgs);
// for (const img of imgs) {
//   if (img.alt === "") {
//     img.setAttribute("alt", "Elzero New");
//   } else {
//     img.setAttribute("alt", "Old");
//   }
// }
//assignment 5

let texts = document.querySelector("[name = 'texts']");
texts.onchange = function () {
  console.log(this.value);
};

let sub_btn = document.querySelector("[name = 'create']");
sub_btn.onclick = function (e) {
  e.preventDefault();
  console.log(Number(document.querySelector("[name = 'elements']").value));
  if (
    document.querySelector("[name = 'texts']").value !== "" &&
    document.querySelector("[name = 'elements'").value !== ""
  ) {
    for (
      let index = 0;
      index < Number(document.querySelector("[name = 'elements']").value);
      index++
    ) {
      console.log("sss");
      let el = document.createElement(
        document.getElementsByTagName("select")[0].value.toLocaleLowerCase()
      );
      let text = document.createTextNode(
        document.querySelector("[name = 'texts']").value
      );
      el.appendChild(text);
      document.body.appendChild(el);
    }
  }
};
