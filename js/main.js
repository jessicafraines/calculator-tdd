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
      prior = ($('#displayoutput').val() * 1) - prior;
      $('#displayoutput').val('');
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
      current = prior += $('#displayoutput').val() * 1;
      var currRounded = Math.round((current) * 1e12) / 1e12;
      $('#displayoutput').val(currRounded);
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
