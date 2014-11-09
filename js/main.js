function displayOutput(){
  return $('#displayoutput').val();
}

var prior = 0;
var current = 0;
var operator;

function press(buttonValue){

  switch (buttonValue) {
    case '+':
      prior += +$('#displayoutput').val();
      $('#displayoutput').val('');
      operator = '+';
      break;

    case '-':
      if(prior === 0){
        prior += $('#displayoutput').val() * 1;
        }else{
        current = prior - $('#displayoutput').val() * 1;
        }
        $('#displayoutput').val('');
        operator = '-';
      break;

    case '*':
      if(prior === 0){
        prior += $('#displayoutput').val() * 1;
        }else{
        current = prior * $('#displayoutput').val() * 1;
        }
        $('#displayoutput').val('');
        operator = '*';
      break;

    case '/':
      if(prior === 0){
        prior += $('#displayoutput').val() * 1;
        }else{
        current = prior / $('#displayoutput').val() * 1;
        }
        $('#displayoutput').val('');
        operator = '/';
      break;

    case 'C':
      // handle C
      break;

    case '=':
      if(operator === '+'){
      current = prior + $('#displayoutput').val() * 1;
      var currRounded = Math.round((current) * 1e12) / 1e12;
      $('#displayoutput').val(currRounded);
      }else if(operator === '-'){
      current = prior - $('#displayoutput').val() * 1;
      var currRounded = Math.round((current) * 1e12) / 1e12;
      $('#displayoutput').val(currRounded);
      }else if(operator === '*'){
      current = prior * $('#displayoutput').val() * 1;
      var currRounded = Math.round((current) * 1e12) / 1e12;
      $('#displayoutput').val(currRounded);
      }else if(operator === '/'){
      current = prior / $('#displayoutput').val() * 1;
      var currRounded = Math.round((current) * 1e12) / 1e12;
      $('#displayoutput').val(currRounded);}
      prior = 0;
      break;

    case '+/-':
      // handle +/-
      break;

    default:
      var current =  $('#displayoutput').val();
      $('#displayoutput').val(current += buttonValue);
  }
}
