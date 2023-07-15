const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const alert = document.getElementById("alert");
const formErrorEmail = document.getElementById("form-error-email");
const formErrorPassword = document.getElementById("form-error-password");
const passwordReveal = document.getElementById("password-reveal");

const formData = {
  email: "",
  password: "",
};

let formErrors = false;

email.addEventListener("change", (event) => {
  formData.email = event.target.value;
});

password.addEventListener("change", (event) => {
  formData.password = event.target.value;
});

passwordReveal.addEventListener("mousedown", (event) => {
  if (password.type === "password") {
    password.type = "text";
    event.target.classList.add("form-password-eye-slash-icon");
  }
});

passwordReveal.addEventListener("mouseup", (event) => {
  if (password.type === "text") {
    password.type = "password";
    event.target.classList.remove("form-password-eye-slash-icon");
  }
});


form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!email.value) {
    formErrorEmail.innerText = "Enter your email!";
    email.classList.add("form-input-error");
    formErrorEmail.classList.remove("form-error-hidden");
    formErrors = true;
  } else {
    formErrorEmail.innerText = "";
    email.classList.remove("form-input-error");
    formErrorEmail.classList.add("form-error-hidden");
    formErrors = false;
    formData.email = email.value;
  }
  if (!password.value) {
    formErrorPassword.innerText = "Enter your password!";
    password.classList.add("form-input-error");
    formErrorPassword.classList.remove("form-error-hidden");
    formErrors = true;
  } else {
    formErrorPassword.innerText = "";
    password.classList.remove("form-input-error");
    formErrorPassword.classList.add("form-error-hidden");
    formErrors = false;
    formData.password = password.value;
  }

  if (!email.value && !password.value) {
    alert.classList.remove("alert-success");
    alert.classList.replace("alert-hidden", "alert-error");
    alert.innerText = "There were errors on the form!";
  } else {
    alert.classList.replace("alert-error", "alert-hidden");
    alert.innerText = "";
  }

  if (!formErrors) {
    alert.classList.replace("alert-hidden", "alert-success");
    alert.innerText = "Form submitted successfully!";
  }

  console.table(formData);
});