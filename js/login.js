let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let emailField = document.getElementById("emailField");
let lostPass = document.getElementById("lostPass");
let title = document.getElementById("title");
signinBtn.onclick = function () {
  emailField.style.display = "none";
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
  lostPass.classList.remove("disable");
};
signupBtn.onclick = function () {
  emailField.style.display = "flex";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
  lostPass.classList.add("disable");
};
