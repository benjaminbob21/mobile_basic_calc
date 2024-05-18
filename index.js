const display = document.getElementById("display");
let lastAnswer = null;

function appendToDisplay(input) {
  if (display.value === "Error") {
    display.value = input;
  } else if (input === "Ans" && lastAnswer !== null) {
    display.value += "Ans";
  } else {
    display.value += input;
  }
}

function clearDisplay() {
  display.value = "";
}

function cleared() {
  const currentValue = display.value;
  if (currentValue.endsWith("Ans")) {
    display.value = currentValue.slice(0, -3);
  } else {
    display.value = currentValue.slice(0, -1);
  }
}

function calculate() {
  try {
    let expression = display.value.replace(/π/g, Math.PI);
    expression = expression.replace(/Ans/g, lastAnswer);
    expression = expression.replace(/\^/g, "**");
    expression = expression.replace(/%/g, "/100");
    expression = expression.replace(/e/g, "Math.E");
    lastAnswer = eval(expression);
    display.value = lastAnswer;
  } catch (error) {
    display.value = "Error";
  }
}
