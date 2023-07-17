let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "Del") {
      string = string.toString().slice(0, -1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});

//only for radian values

function sin() {
  string = Math.sin(string);
  input.value = string;
}
function cos() {
  string = Math.cos(string);
  input.value = string;
}
function tan() {
  string = Math.tan(string);
  input.value = string;
}
function sqrt() {
  string = Math.sqrt(string, 2);
  input.value = string;
}
