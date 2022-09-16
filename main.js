function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button.calc");
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("Button text is ", buttonText);
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "AC") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
