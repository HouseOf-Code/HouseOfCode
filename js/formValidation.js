const form = document.querySelector("form");
const email = document.querySelector("#form__email--input");
const name = document.querySelector("#form__name--input");
const message = document.querySelector("#form__message--input");

const emailError = document.querySelector(".form__email--error");
const nameError = document.querySelector(".form__name--error");
const messageError = document.querySelector(".form__message--error");

const formFeedback = document.querySelector(".form__success");

form.addEventListener("submit", validateForm);

function validateForm() {
  event.preventDefault();

  if (emailValidation(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    emailError.innerHTML = "* please enter a valid email";
  }

  if (checkLength(name.value, 4) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
    nameError.innerHTML = "* must contain minimum 5 characters";
  }

  if (checkLength(message.value, 14) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
    messageError.innerHTML = "* message must be minimum 15 characters";
  }

  if (
    emailValidation(email.value) === true &&
    checkLength(name.value, 4) === true &&
    checkLength(message.value, 14) === true
  ) {
    form.style.display = "none";
    formFeedback.style.display = "block";
    formFeedback.innerHTML =
      "Thanks for contacting us! We will be in touch as soon as possible.";
  }
}

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
