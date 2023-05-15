//the main program logic is implemented here
//firstArg and secondArg can be floating point values or integers
//firstArg is never null
var displayedValue = 0;
var storedValue = null;
var operatorJustClicked = false;
var makingDecimal = false;

//currentlyFilling 1 means we filling firstArg. currentlyFilling 2 means we filling secondArg.
//var currentlyFilling = 1;

//operator can be ÷, x, + or -
var operator = null;

//number buttons
function zero() {
  resetCalcButtonColors();
  if (operatorJustClicked) {
    storedValue = displayedValue;
    displayedValue = 0;
  } else {
    displayedValue = displayedValue * 10;
  }
  document.getElementById("displayedNumber").innerHTML = displayedValue;
  operatorJustClicked = false;
}

function one() {
  resetCalcButtonColors();
  document.getElementById("AC").innerHTML = "C";
  if (operatorJustClicked) {
    storedValue = displayedValue;
    displayedValue = 1;
  } else {
    displayedValue = displayedValue * 10 + 1;
  }
  document.getElementById("displayedNumber").innerHTML = displayedValue;
  operatorJustClicked = false;
}

function two() {
  resetCalcButtonColors();
  document.getElementById("AC").innerHTML = "C";
  if (operatorJustClicked) {
    storedValue = displayedValue;
    displayedValue = 2;
  } else {
    displayedValue = displayedValue * 10 + 2;
  }
  document.getElementById("displayedNumber").innerHTML = displayedValue;
  operatorJustClicked = false;
}

function three() {
  resetCalcButtonColors();
  document.getElementById("AC").innerHTML = "C";
  if (operatorJustClicked) {
    storedValue = displayedValue;
    displayedValue = 3;
  } else {
    displayedValue = displayedValue * 10 + 3;
  }
  document.getElementById("displayedNumber").innerHTML = displayedValue;
  operatorJustClicked = false;
}

function four() {
  resetCalcButtonColors();
  document.getElementById("AC").innerHTML = "C";
  if (operatorJustClicked) {
    storedValue = displayedValue;
    displayedValue = 4;
  } else {
    displayedValue = displayedValue * 10 + 4;
  }
  document.getElementById("displayedNumber").innerHTML = displayedValue;
  operatorJustClicked = false;
}

function five() {
  resetCalcButtonColors();
  document.getElementById("AC").innerHTML = "C";
  if (operatorJustClicked) {
    storedValue = displayedValue;
    displayedValue = 5;
  } else {
    displayedValue = displayedValue * 10 + 5;
  }
  document.getElementById("displayedNumber").innerHTML = displayedValue;
  operatorJustClicked = false;
}

function six() {
  resetCalcButtonColors();
  document.getElementById("AC").innerHTML = "C";
  if (operatorJustClicked) {
    storedValue = displayedValue;
    displayedValue = 6;
  } else {
    displayedValue = displayedValue * 10 + 6;
  }
  document.getElementById("displayedNumber").innerHTML = displayedValue;
  operatorJustClicked = false;
}

function seven() {
  resetCalcButtonColors();
  document.getElementById("AC").innerHTML = "C";
  if (operatorJustClicked) {
    storedValue = displayedValue;
    displayedValue = 7;
  } else {
    displayedValue = displayedValue * 10 + 7;
  }
  document.getElementById("displayedNumber").innerHTML = displayedValue;
  operatorJustClicked = false;
}

function eight() {
  resetCalcButtonColors();
  document.getElementById("AC").innerHTML = "C";
  if (operatorJustClicked) {
    storedValue = displayedValue;
    displayedValue = 8;
  } else {
    displayedValue = displayedValue * 10 + 8;
  }
  document.getElementById("displayedNumber").innerHTML = displayedValue;
  operatorJustClicked = false;
}

function nine() {
  resetCalcButtonColors();
  document.getElementById("AC").innerHTML = "C";
  if (operatorJustClicked) {
    storedValue = displayedValue;
    displayedValue = 9;
  } else {
    displayedValue = displayedValue * 10 + 9;
  }
  document.getElementById("displayedNumber").innerHTML = displayedValue;
  operatorJustClicked = false;
}

//decimal
function dot() {
  resetCalcButtonColors();
  makingDecimal = true;
}

//AC resets all previous calculations
function AC() {
  document.getElementById("");
  document.getElementById("AC").innerHTML = "AC";
  displayedValue = 0;
  storedValue = null;
  operator = null;
  operatorJustClicked = false;
  document.getElementById("displayedNumber").innerHTML = displayedValue;
}

//changes the positivity of the current value
function plusMinus() {
  displayedValue = -1 * displayedValue;
  document.getElementById("displayedNumber").innerHTML = displayedValue;
}

//causes a division of the current value by 100
function percent() {
  displayedValue = displayedValue / 100;
  document.getElementById("displayedNumber").innerHTML = displayedValue;
}

//Normal calculation operations
function divide() {
  makingDecimal = false;
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
  operator = "÷";
}

function plus() {
  resetCalcButtonColors();
  makingDecimal = false;
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
  operator = "+";
}

function minus() {
  resetCalcButtonColors();
  makingDecimal = false;
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
  operator = "-";
}

function multiply() {
  makingDecimal = false;
  resetCalcButtonColors();
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
  operator = "x";
}

//when equals button is pressed
function equals() {
  resetCalcButtonColors();
  makingDecimal = false;
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
        displayedValue = displayedValue + storedValue;
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
