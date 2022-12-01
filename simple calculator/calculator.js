var header = document.querySelector(".calculator header");
var scientific = false;
var trigStr = "";
function render_div(x) {
  if (x == "cos") {
    header.innerHTML += x + " (";
    scientific = true;
    trigStr = "cos";
  } else if (x == "sin") {
    header.innerHTML += x + " (";
    scientific = true;
    trigStr = "sin";
  } else if (x == "tan") {
    header.innerHTML += x + " (";
    scientific = true;
    trigStr = "tan";
  } else if (x == "bracket") {
    header.innerHTML += ")";
  } else {
    header.innerHTML += x;
  }
}
function applyEquation() {
  if (header.innerHTML.indexOf(trigStr) != -1 && scientific == true) {
    var f = header.innerHTML.indexOf("(") + 1;
    var s = header.innerHTML.indexOf(")");
    var Radian = Number(header.innerHTML.slice(f, s));
    var resultInDegrees = (Radian * Math.PI) / 180;

    if (trigStr === "cos") {
      console.log(Math.cos(resultInDegrees));
      resultInDegrees = Math.cos(resultInDegrees).toFixed(2);
    } else if (trigStr === "sin") {
      console.log(Math.sin(resultInDegrees));
      resultInDegrees = Math.sin(resultInDegrees).toFixed(2);
    } else if (trigStr === "tan") {
      console.log(Math.tan(resultInDegrees));
      resultInDegrees = Math.tan(resultInDegrees).toFixed(2);
    }

    header.innerHTML += " = " + resultInDegrees;
  } else {
    var result = eval(header.innerHTML);
    header.innerHTML += " = " + result;
  }
}

function converter(type) {
  if (type == "bin") {
    header.innerHTML = Number(header.innerHTML).toString(2);
  } else if (type == "hex") {
    header.innerHTML = Number(header.innerHTML).toString(16);
  } else if (type == "oct") {
    header.innerHTML = Number(header.innerHTML).toString(8);
  }
}

function clearAll() {
  scientific == false;
  header.innerHTML = "";
}
