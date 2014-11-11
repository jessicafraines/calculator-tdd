function displayOutput(){
  return $('#displayoutput').val();
}

var previousResult;
var nextOperation;

/*function operation(a, b, operator){
  switch(operator){
    case 'add':
    return Math.round((a + b) * 1e12) / 1e12;
    break;
    case 'subtract':
    return Math.round((a - b) * 1e12) / 1e12;
    break;
    case 'multiply':
    return Math.round((a * b) * 1e12) / 1e12;
    break;
    case 'divide':
    return Math.round((a / b) * 1e12) / 1e12;
    break;
  }
}*/

function add(a, b){
  return Math.round((a + b) * 1e12) / 1e12;
}

function subtract(a, b){
  return Math.round((a - b) * 1e12) / 1e12;
}

function multiply(a, b){
  return Math.round((a * b) * 1e12) / 1e12;
}

function divide(a, b){
  return Math.round((a / b) * 1e12) / 1e12;
}

function currentValue(string){
  return $('#displayoutput').val() * 1;
}
function calculate(){
  if(!!nextOperation){
    previousResult = nextOperation(previousResult, currentValue());
  }else{
    previousResult = currentValue();
  }
}

function press(buttonValue){

  switch (buttonValue) {
    case '+':
      calculate();
      nextOperation = add;
      $('#displayoutput').val('');
      break;

    case '-':
      calculate();
      nextOperation = subtract;
      $('#displayoutput').val('');
      break;

    case '*':
      calculate();
      nextOperation = multiply;
      $('#displayoutput').val('');
      break;

    case '/':
      calculate();
      nextOperation = divide;
      $('#displayoutput').val('');
      break;

    case 'C':
      calculate();
      return $('#displayoutput').val(0);
      break;

    case '=':
      calculate();
      $('#displayoutput').val(previousResult);
      break;

    case '+/-':
      // handle +/-
      break;

    default:
      var current =  $('#displayoutput').val();
      $('#displayoutput').val(current + buttonValue);
  }
}
document.addEventListener('DOMContentLoaded', function(){
  var keys = document.querySelectorAll('.calcBody span');
  for(var i = 0; i < keys.length, i++){
    keys[i].onclick = function(){
      var input = document.querySelector('.screen');
      var inputValue = input.innerHTML;
      var buttonValue = this.innerHTML;
    }
  }
});


