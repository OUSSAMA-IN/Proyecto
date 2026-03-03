const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const age = document.getElementById("age");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


form.addEventListener("submit", function(e) {
  e.preventDefault(); 

  checkInputs();
});

function checkInputs() {

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const ageValue = age.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else {
    setSuccess(email);
  }

  if (ageValue === "") {
    setError(age, "Age is required");
  } else if (ageValue < 0 || ageValue >= 1000) {
    setError(age, "Age must be between 0 and 999");
  } else {
    setSuccess(age);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 characters");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm password");
  } else if (passwordValue !== password2Value) {
    setError(password2, "Passwords do not match");
  } else {
    setSuccess(password2);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  formControl.classList.remove("success");

  const small = formControl.querySelector("small");
  small.innerText = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add("success");
  formControl.classList.remove("error");

  const small = formControl.querySelector("small");
  small.innerText = "";
}