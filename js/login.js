let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let emailField = document.getElementById("emailField");
let lostPass = document.getElementById("lostPass");
let invalid = document.getElementById("invalid");
let title = document.getElementById("title");
let users;
let togglePasswordButton = document.getElementById("toggle-password");
let eye = document.getElementById("eye");
let eyeSlash = document.getElementById("eye-slash");
let password = document.getElementById("password");
let errorP = document.getElementById("passwordField");
let errorN = document.getElementById("nameField");
togglePasswordButton.addEventListener("click", togglePassword);
let f = 0;
signinBtn.onclick = function () {
  emailField.style.display = "none";
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
  lostPass.classList.remove("disable");

  if (f == 1) {
    login();
  }
  f = 1;
};
signupBtn.onclick = function () {
  f = 0;
  invalid.style.display = "none";
  errorN.classList.remove("alert-validate");
  errorP.classList.remove("alert-validate");
  emailField.style.display = "flex";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
  lostPass.classList.add("disable");
};

fetch("../users.json")
  .then((response) => response.json())
  .then((jsonData) => {
    users = jsonData.users;
  })
  .then(() => {
    waitData();
  })
  .catch((error) => console.error("Error fetching the data:", error));

function waitData() {
  //   signinBtn.addEventListener("click", login);
}

function togglePassword() {
  var passwordInput = document.getElementById("password");
  eyeSlash.classList.toggle("disable");
  eye.classList.toggle("disable");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (!username) {
    errorN.classList.add("alert-validate");
  } else {
    errorN.classList.remove("alert-validate");
  }
  if (!password) {
    errorP.classList.add("alert-validate");
  } else {
    errorP.classList.remove("alert-validate");
  }

  let user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    window.location.href = "index.html";
  } else {
    invalid.style.display = "block";
    lostPass.classList.add("disable");
    console.log("Invalid username or password. Please try again.");
  }
}
function register() {}
