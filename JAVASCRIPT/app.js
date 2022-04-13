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