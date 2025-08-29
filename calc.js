let buttons = document.querySelectorAll(".col");
let display = document.querySelector(".dis");

let expression = ""; // to store what user types

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let val = this.innerText;

    if (val === "AC") {
      expression = "";
      display.innerText = "";
    } else if (val === "Back") {
      expression = expression.slice(0, -1);
      display.innerText = expression;
    } else if (val === "=") {
      try {
        // Replace 'x' with '*' for eval
        let result = eval(expression.replace(/x/g, "*"));
        display.innerText = result;
        expression = result.toString();
      } catch {
        display.innerText = "Error";
        expression = "";
      }
    } else {
      expression += val;
      display.innerText = expression;
    }
  });
});
