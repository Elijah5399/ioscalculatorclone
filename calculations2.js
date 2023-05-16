//the main program logic is implemented here
//firstArg and secondArg are internally stored as STRINGS
//firstArg is never null
var displayedValue = "";
var storedValue = null;
var operatorJustClicked = false;

//operator can be ÷, x, + or -
var operator = null;

//number buttons
function zero() {
  resetCalcButtonColors();
  if (displayedValue === "" || displayedValue === "-") {
    //do nothing to displayedValue
    document.getElementById("displayedNumber").innerHTML = displayedValue + "0";
    operatorJustClicked = false;
    return;
  } else if (operatorJustClicked) {
    storedValue = displayedValue;
    displayedValue = "0";
  } else {
    displayedValue = displayedValue + "0";
  }
  document.getElementById("displayedNumber").innerHTML = displayedValue;
  operatorJustClicked = false;
}

function one() {
  resetCalcButtonColors();
  document.getElementById("AC").innerHTML = "C";
  if (operatorJustClicked) {
    storedValue = displayedValue;
    displayedValue = "1";
  } else {
    displayedValue = displayedValue + "1";
  }
  document.getElementById("displayedNumber").innerHTML = displayedValue;
  operatorJustClicked = false;
}

function two() {
  resetCalcButtonColors();
  document.getElementById("AC").innerHTML = "C";
  if (operatorJustClicked) {
    storedValue = displayedValue;
    displayedValue = "2";
  } else {
    displayedValue = displayedValue + "2";
  }
  document.getElementById("displayedNumber").innerHTML = displayedValue;
  operatorJustClicked = false;
}

function three() {
  resetCalcButtonColors();
  document.getElementById("AC").innerHTML = "C";
  if (operatorJustClicked) {
    storedValue = displayedValue;
    displayedValue = "3";
  } else {
    displayedValue = displayedValue + "3";
  }
  document.getElementById("displayedNumber").innerHTML = displayedValue;
  operatorJustClicked = false;
}

function four() {
  resetCalcButtonColors();
  document.getElementById("AC").innerHTML = "C";
  if (operatorJustClicked) {
    storedValue = displayedValue;
    displayedValue = "4";
  } else {
    displayedValue = displayedValue + "4";
  }
  document.getElementById("displayedNumber").innerHTML = displayedValue;
  operatorJustClicked = false;
}

function five() {
  resetCalcButtonColors();
  document.getElementById("AC").innerHTML = "C";
  if (operatorJustClicked) {
    storedValue = displayedValue;
    displayedValue = "5";
  } else {
    displayedValue = displayedValue + "5";
  }
  document.getElementById("displayedNumber").innerHTML = displayedValue;
  operatorJustClicked = false;
}

function six() {
  resetCalcButtonColors();
  document.getElementById("AC").innerHTML = "C";
  if (operatorJustClicked) {
    storedValue = displayedValue;
    displayedValue = "6";
  } else {
    displayedValue = displayedValue + "6";
  }
  document.getElementById("displayedNumber").innerHTML = displayedValue;
  operatorJustClicked = false;
}

function seven() {
  resetCalcButtonColors();
  document.getElementById("AC").innerHTML = "C";
  if (operatorJustClicked) {
    storedValue = displayedValue;
    displayedValue = "7";
  } else {
    displayedValue = displayedValue + "7";
  }
  document.getElementById("displayedNumber").innerHTML = displayedValue;
  operatorJustClicked = false;
}

function eight() {
  resetCalcButtonColors();
  document.getElementById("AC").innerHTML = "C";
  if (operatorJustClicked) {
    storedValue = displayedValue;
    displayedValue = "8";
  } else {
    displayedValue = displayedValue + "8";
  }
  document.getElementById("displayedNumber").innerHTML = displayedValue;
  operatorJustClicked = false;
}

function nine() {
  resetCalcButtonColors();
  document.getElementById("AC").innerHTML = "C";
  if (operatorJustClicked) {
    storedValue = displayedValue;
    displayedValue = "9";
  } else {
    displayedValue = displayedValue + "9";
  }
  document.getElementById("displayedNumber").innerHTML = displayedValue;
  operatorJustClicked = false;
}

//decimal
function dot() {
  resetCalcButtonColors();
  displayedValue += ".";
}

//AC resets all previous calculations
function AC() {
  resetCalcButtonColors();
  document.getElementById("AC").innerHTML = "AC";
  displayedValue = "";
  storedValue = null;
  operator = null;
  operatorJustClicked = false;
  document.getElementById("displayedNumber").innerHTML = "0";
}

//changes the positivity of the current value
function plusMinus() {
  if (displayedValue === "") {
    displayedValue = "-";
    document.getElementById("displayedNumber").innerHTML = displayedValue + "0";
    return;
  } else if (displayedValue === "-") {
    displayedValue = "";
    document.getElementById("displayedNumber").innerHTML = "0";
    return;
  }
  if (displayedValue[0] == "-") {
    displayedValue = displayedValue.substring(1);
  } else {
    displayedValue = "-" + displayedValue;
  }
  document.getElementById("displayedNumber").innerHTML = displayedValue;
}

//causes a division of the current value by 100
function percent() {
  displayedValue = Number(displayedValue);
  displayedValue /= 100;
  displayedValue = displayedValue.toString();
  document.getElementById("displayedNumber").innerHTML = displayedValue;
}

//Normal calculation operations
function divide() {
  //makingDecimal = false;
  displayedValue = Number(displayedValue);
  if (storedValue != null) storedValue = Number(storedValue);
  resetCalcButtonColors();
  document.getElementById("divide").style.backgroundColor = "#edeff2";
  document.getElementById("divide").style.color = "#ffbb00";
  if (operatorJustClicked) {
    //do nothing
  } else {
    if (storedValue == null) {
      //do nothing
    } else {
      displayedValue = storedValue / displayedValue;
      storedValue = displayedValue;
      document.getElementById("displayedNumber").innerHTML = displayedValue;
    }
    operatorJustClicked = true;
  }
  displayedValue = displayedValue.toString();
  if (storedValue != null) storedValue = storedValue.toString();
  operator = "÷";
}

function plus() {
  displayedValue = Number(displayedValue);
  if (storedValue != null) storedValue = Number(storedValue);
  resetCalcButtonColors();
  document.getElementById("plus").style.backgroundColor = "#edeff2";
  document.getElementById("plus").style.color = "#ffbb00";
  if (operatorJustClicked) {
    //do nothing
  } else {
    if (storedValue == null) {
      //do nothing
    } else {
      displayedValue = storedValue + displayedValue;
      storedValue = displayedValue;
      document.getElementById("displayedNumber").innerHTML = displayedValue;
    }
    operatorJustClicked = true;
  }
  displayedValue = displayedValue.toString();
  if (storedValue != null) storedValue = storedValue.toString();
  operator = "+";
}

function minus() {
  displayedValue = Number(displayedValue);
  if (storedValue != null) storedValue = Number(storedValue);
  resetCalcButtonColors();
  document.getElementById("minus").style.backgroundColor = "#edeff2";
  document.getElementById("minus").style.color = "#ffbb00";
  if (operatorJustClicked) {
    //do nothing
  } else {
    if (storedValue == null) {
      //do nothing
    } else {
      displayedValue = storedValue - displayedValue;
      storedValue = displayedValue;
      document.getElementById("displayedNumber").innerHTML = displayedValue;
    }
    operatorJustClicked = true;
  }
  displayedValue = displayedValue.toString();
  if (storedValue != null) storedValue = storedValue.toString();
  operator = "-";
}

function multiply() {
  resetCalcButtonColors();
  displayedValue = Number(displayedValue);
  if (storedValue != null) storedValue = Number(storedValue);
  document.getElementById("multiply").style.backgroundColor = "#edeff2";
  document.getElementById("multiply").style.color = "#ffbb00";
  if (operatorJustClicked) {
    //do nothing
  } else {
    if (storedValue == null) {
      //do nothing
    } else {
      displayedValue = storedValue * displayedValue;
      storedValue = displayedValue;
      document.getElementById("displayedNumber").innerHTML = displayedValue;
    }
    operatorJustClicked = true;
  }
  displayedValue = displayedValue.toString();
  if (storedValue != null) storedValue = storedValue.toString();
  operator = "x";
}

//when equals button is pressed
function equals() {
  resetCalcButtonColors();
  displayedValue = Number(displayedValue);
  if (storedValue != null) storedValue = Number(storedValue);
  if (operatorJustClicked) {
    if (storedValue == null) {
      storedValue = displayedValue;
      if (operator == "+") {
        displayedValue = displayedValue + displayedValue;
        document.getElementById("displayedNumber").innerHTML = displayedValue;
      } else if (operator == "-") {
        displayedValue = 0;
        document.getElementById("displayedNumber").innerHTML = displayedValue;
      } else if (operator == "x") {
        displayedValue = displayedValue * displayedValue;
        document.getElementById("displayedNumber").innerHTML = displayedValue;
        console.log("Line A");
      } else if (operator == "÷") {
        displayedValue = 1;
        document.getElementById("displayedNumber").innerHTML = displayedValue;
      }
    } else {
      if (operator == "+") {
        displayedValue = displayedValue + storedValue;
        document.getElementById("displayedNumber").innerHTML = displayedValue;
      } else if (operator == "-") {
        displayedValue = displayedValue - storedValue;
        document.getElementById("displayedNumber").innerHTML = displayedValue;
      } else if (operator == "x") {
        displayedValue = displayedValue * storedValue;
        document.getElementById("displayedNumber").innerHTML = displayedValue;
      } else if (operator == "÷") {
        displayedValue = displayedValue / storedValue;
        document.getElementById("displayedNumber").innerHTML = displayedValue;
      }
    }
  } else {
    var stored2 = displayedValue;
    if (operator == null) {
      //do nothing
    } else if (operator == "+") {
      displayedValue = storedValue + displayedValue;
      document.getElementById("displayedNumber").innerHTML = displayedValue;
    } else if (operator == "-") {
      displayedValue = storedValue - displayedValue;
      document.getElementById("displayedNumber").innerHTML = displayedValue;
    } else if (operator == "x") {
      displayedValue = storedValue * displayedValue;
      document.getElementById("displayedNumber").innerHTML = displayedValue;
    } else if (operator == "÷") {
      displayedValue = storedValue / displayedValue;
      document.getElementById("displayedNumber").innerHTML = displayedValue;
    }
    storedValue = stored2;
    operatorJustClicked = true;
  }
  if (storedValue != null) storedValue = storedValue.toString();
  displayedValue = displayedValue.toString();
}
function resetCalcButtonColors() {
  document.getElementById("divide").style.color = "white";
  document.getElementById("divide").style.backgroundColor = "#ffbb00";
  document.getElementById("multiply").style.color = "white";
  document.getElementById("multiply").style.backgroundColor = "#ffbb00";
  document.getElementById("minus").style.color = "white";
  document.getElementById("minus").style.backgroundColor = "#ffbb00";
  document.getElementById("plus").style.color = "white";
  document.getElementById("plus").style.backgroundColor = "#ffbb00";
}
//a utility function which counts the DP of a stringified number
var countDecimals = function (value) {
  if (!value.includes(".")) return 0;
  return value.split(".")[1].length;
};
