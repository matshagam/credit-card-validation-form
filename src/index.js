const form = document.querySelector('.identification-head_bank form');
const cvc = form.querySelector('.card-cvc');
const user = form.querySelector('.card-user');
const cardNumber = form.querySelectorAll('.card-number');
const month = form.querySelector('.card-month');
const year = form.querySelector('.card-year');

const dYear = new Date().getFullYear();
const dMonth = new Date().getMonth();

validateForm = () => {
  event.preventDefault();

  removeValidation();
  checkErrors();

  const errors = form.querySelectorAll('.error');

  if (!errors.length) {
    return true;
  } else {
    return false;
  }
};

removeValidation = () => {
  const errors = form.querySelectorAll('.error');

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
  if (Number(month.value) < dMonth && Number(year.value) === dYear)
    month.className += ' ' + 'error';
};

console.log('this.is index');
