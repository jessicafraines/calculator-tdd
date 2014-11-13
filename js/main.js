// display output text in jquery selector of #displayoutput
function displayOutput() {
  return $('#displayoutput').text();
}

$(document).ready(function() {
  $('span').click(function() {
    press($(this).text());
  });
});

var previousResult;
var nextOperation;

function add(a, b) {
  var left = new Decimal(a);
  var right = new Decimal(b);
  return (left.plus(right));
}

function subtract(a, b) {
  var left = new Decimal(a);
  var right = new Decimal(b);
  return (left.minus(right));
}

function multiply(a, b) {
  var left = new Decimal(a);
  var right = new Decimal(b);
  console.log(left.times(right));
  return (left.times(right));
}

function divide(a, b) {
  var left = new Decimal(a);
  var right = new Decimal(b);
  console.log(left.times(right));
  return (left.dividedBy(right));
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
      previousResult = undefined;
      nextOperation = undefined;
      $('#displayoutput').text('');
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
      $('#displayoutput').text(current + buttonValue);
  }
}
