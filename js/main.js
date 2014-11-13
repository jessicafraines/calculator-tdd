// display output text in jquery selector of #displayoutput
function displayOutput() {
  return $('#displayoutput').text();
}

$(document).ready(function() {
  //displayOutput();
  $('span').click(function() {
    //console.log($(this)); this is the span screen
    press($(this).text());
  });
});

/*document.querySelector('.calcBody span').addEventListener('click', function(){
  press($(this).text());
});*/


var previousResult;
var nextOperation;

function add(a, b) {
  var left = new Decimal(a);
  var right = new Decimal(b);
  //var result = a.minus(b);
  return (left.plus(right));
  //return Math.round((a + b) * 1e12) / 1e12;
}

function subtract(a, b) {
  var left = new Decimal(a);
  var right = new Decimal(b);
  return (left.minus(right));
  //return Math.round((a - b) * 1e12) / 1e12;
}

function multiply(a, b) {
  var left = new Decimal(a);
  var right = new Decimal(b);
  console.log(left.times(right));
  //return (left.times(right));
  //return Math.round((a * b) * 1e12) / 1e12;
}

function divide(a, b) {
  var left = new Decimal(a);
  var right = new Decimal(b);
  return (left.dividedBy(right));
  //return Math.round((a / b) * 1e12) / 1e12;
}

function currentValue(string) {
  return $('#displayoutput').text() * 1;
}

function calculate() {
  if (!!nextOperation) {
    previousResult = nextOperation(previousResult, currentValue());
  } else {
    previousResult = currentValue();
  }
}

function press(buttonValue) {
  switch (buttonValue) {
    case '+':
      calculate();
      nextOperation = add;
      $('#displayoutput').text('');
      break;
    case '-':
      calculate();
      nextOperation = subtract;
      $('#displayoutput').text('');
      break;
    case '*':
      calculate();
      nextOperation = multiply;
      $('#displayoutput').text('');
      break;
    case '/':
      calculate();
      nextOperation = divide;
      $('#displayoutput').text('');
      break;
    case 'C':
      calculate();
      previousResult = "";
      $('#displayoutput').text(previousResult);
      break;
    case '=':
      calculate();
      $('#displayoutput').text(previousResult);
      break;
    case '+/-':
      // handle +/-
      break;
    default:
      var current = $('#displayoutput').text();
      //console.log('c', current);
      //console.log('BV', buttonValue);
      $('#displayoutput').text(current + buttonValue);
  }
}
