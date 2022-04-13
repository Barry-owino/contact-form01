const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

function validateName() {
  const name = document.getElementById('contact-name').value;

  if (name.length == 0){
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Write full name';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validatePhone() {
  const phone = document.getElementById('contact-phone').value;

  if (phone.length == 0){
    phoneError.innerHTML = 'Phone Number is required';
    return false;
  }
  if (phone.length !== 10){
    phoneError.innerHTML = 'Phone no should be 10 digits'
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = 'Only digits please';
    return false;
  }
  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

//validate email function and if conditions
function validateEmail() {
  const email = document.getElementById('contact-email').value;

  if (email.length == 0){
    emailError.innerHTML = 'Email is required';
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = 'Email Invalid'
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}