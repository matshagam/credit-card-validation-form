var form = document.querySelector('.identification-head_bank form');
var cvc = form.querySelector('.card-cvc');
var user = form.querySelector('.card-user');
var cardNumber = form.querySelectorAll('.card-number');

validateForm = () => {
  event.preventDefault();

  removeValidation();
  checkErrors();

  var errors = document.querySelectorAll('.error');

  if (!errors.length) {
    return true;
  } else {
    return false;
  }
};

removeValidation = () => {
  var errors = document.querySelectorAll('.error');

  for (let i = 0; i < errors.length; i++) {
    errors[i].classList.remove('error');
  }
};

checkErrors = () => {
  for (let i = 0; i < cardNumber.length; i++) {
    if (cardNumber[i].value.length !== 4)
      cardNumber[i].className += ' ' + 'error';
  }
  if (cvc.value.length !== 3) cvc.className += ' ' + 'error';
  if (!/^([- A-Za-z0-9]+){4,}$/.test(user.value))
    user.className += ' ' + 'error';
};
