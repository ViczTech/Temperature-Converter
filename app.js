let input = document.getElementById("input");

let zero = document.getElementById("no0");
let one = document.getElementById("no1");
let two = document.getElementById("no2");
let three = document.getElementById("no3");
let four = document.getElementById("no4");
let five = document.getElementById("no5");
let six = document.getElementById("no6");
let seven = document.getElementById("no7");
let eight = document.getElementById("no8");
let nine = document.getElementById("no9");
let decimal = document.getElementById("decimal");
let positve = document.getElementById("positivity");
let clear = document.getElementById("clearAll");
// KEYPAD & INPUT BUTTONS
zero.onclick = function () {
  input.value += zero.innerText;
};
one.onclick = function () {
  input.value += one.innerText;
};
two.onclick = function () {
  input.value += two.innerText;
};
three.onclick = function () {
  input.value += three.innerText;
};
four.onclick = function () {
  input.value += four.innerText;
};
five.onclick = function () {
  input.value += five.innerText;
};
six.onclick = function () {
  input.value += six.innerText;
};
seven.onclick = function () {
  input.value += seven.innerText;
};
eight.onclick = function () {
  input.value += eight.innerText;
};
nine.onclick = function () {
  input.value += nine.innerText;
};
clear.onclick = function () {
  input.value = " ";
  result.innerText = "0";
};

// KEYPAD & INPUT BUTTONS FUNCTIONALITY

const currentTempBTN = document.getElementById("curr");
const currTempMenu = document.getElementById("currtempSelect");
const currCelsiusBTN = document.getElementById("currCel");
const currKelvinBTN = document.getElementById("currKev");
const currFahrenheitBTN = document.getElementById("currFah");
// SELECTING ALL BUTTONS FOR THE CURRENT TEMPERATURE
currentTempBTN.onclick = function () {
  currTempMenu.classList.toggle("hidden");
};
// TOGGLE BUTTON
currCelsiusBTN.addEventListener("click", function () {
  currentTempBTN.innerText = currCelsiusBTN.innerText;
  currTempMenu.classList.toggle("hidden");
});
currKelvinBTN.addEventListener("click", function () {
  currentTempBTN.innerText = currKelvinBTN.innerText;
  currTempMenu.classList.toggle("hidden");
});
currFahrenheitBTN.addEventListener("click", function () {
  currentTempBTN.innerText = currFahrenheitBTN.innerText;
  currTempMenu.classList.toggle("hidden");
});
// EVERY LOGIC BEHING SWITCH INITIAL TEMPERATURES

const nexttempBTN = document.getElementById("next");
const nextTempMenu = document.getElementById("nexttempSelect");
const nextCelsiusBTN = document.getElementById("nextCel");
const nextKelvinBTN = document.getElementById("nextKev");
const nextFahrenheitBTN = document.getElementById("nextFah");
// SELECTING ALL BUTTONS FOR THE NEXT TEMPERATURE
nexttempBTN.onclick = function () {
  nextTempMenu.classList.toggle("hidden");
};
// TOGGLE BUTTON
nextCelsiusBTN.addEventListener("click", function () {
  nexttempBTN.innerText = nextCelsiusBTN.innerText;
  nextTempMenu.classList.toggle("hidden");
});
nextKelvinBTN.addEventListener("click", function () {
  nexttempBTN.innerText = nextKelvinBTN.innerText;
  nextTempMenu.classList.toggle("hidden");
});
nextFahrenheitBTN.addEventListener("click", function () {
  nexttempBTN.innerText = nextFahrenheitBTN.innerText;
  nextTempMenu.classList.toggle("hidden");
});
// EVERY LOGIC BEHING SWITCH TO NEW TEMPERATURES

let result = document.getElementById("result");

let Fahrenheit;
let Celsius;
let Kelvin;

let submit = document.getElementById("enter");

submit.onclick = function () {
  allNum = Number(input.value);

  input.value = "";

  function initTemp() {
    if (currentTempBTN.innerText == "Celsius") {
      Celsius = allNum;
      if (nexttempBTN.innerText == "Celsius") {
        result.innerText = Celsius;
      } else if (nexttempBTN.innerText == "Fahrenheit") {
        result.innerText = (Celsius * 1.8 + 32).toFixed(4);
      } else if (nexttempBTN.innerText == "Kelvin") {
        result.innerText = (Celsius + 273.15).toFixed(4);
      }
    } else if (currentTempBTN.innerText == "Fahrenheit") {
      Fahrenheit = allNum;
      if (nexttempBTN.innerText == "Fahrenheit") {
        result.innerText = Fahrenheit;
      } else if (nexttempBTN.innerText == "Celsius") {
        result.innerText = ((5 / 9) * (Fahrenheit - 32)).toFixed(4);
      } else if (nexttempBTN.innerText == "Kelvin") {
        result.innerText = ((5 / 9) * (Fahrenheit - 32) + 273.15).toFixed(4);
      }
    } else {
      Kelvin = allNum;
      if (nexttempBTN.innerText == "Kelvin") {
        result.innerText = Kelvin;
      } else if (nexttempBTN.innerText == "Celsius") {
        result.innerText = (Kelvin - 273.15).toFixed(4);
      } else if (nexttempBTN.innerText == "Fahrenheit") {
        result.innerText = ((9 / 5) * (Kelvin - 273.15) + 32).toFixed(4);
      }
    }
  }
  initTemp();
};

// SWITCHING BEHIND ALL TEMPERATURES FROM CLICKING THE ENTER BUTTON

const darkModeButton = document.getElementById("darkModeButton");
const body = document.querySelector(".theContainer");

darkModeButton.onclick = function () {
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    darkModeButton.classList.remove("dark-mode");
    darkModeButton.classList.add("light-mode");
    darkModeButton.innerText = "Light";
    input.classList.remove("light-mode");
    input.classList.add("dark-mode");
    result.classList.remove("light-mode");
    result.classList.add("dark-mode");
  } else if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    darkModeButton.classList.remove("light-mode");
    darkModeButton.classList.add("dark-mode");
    darkModeButton.innerText = "Dark";
    input.classList.remove("dark-mode");
    input.classList.add("light-mode");
    result.classList.remove("dark-mode");
    result.classList.add("light-mode");
  }
};
// DARK MODE & LIGHT MODE
