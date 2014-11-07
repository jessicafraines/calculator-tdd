function displayOutput(){
  return $('#displayoutput').val();
}

var prior = 0;

function press(buttonValue){

  switch (buttonValue) {
    case '+':
      prior += +$('#displayoutput').val();
      $('#displayoutput').val('');
      break;

    case '-':
      // handle -
      break;

    case '*':
      // handle *
      break;

    case '/':
      // handle /
      break;

    case 'C':
      // handle C
      break;

    case '=':
      prior += $('#displayoutput').val() * 1;
      $('#displayoutput').val(prior);
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
