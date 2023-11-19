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
let errorE = document.getElementById("emailField");
togglePasswordButton.addEventListener("click", togglePassword);
let f = 2;
let flag = true;
signinBtn.onclick = function () {
  rest();
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
  invalid.style.display = "none";
  rest();
  emailField.style.display = "flex";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
  lostPass.classList.add("disable");
  if (f == 2) {
    register();
  }
  f = 2;
};
function rest() {
  errorN.classList.remove("alert-validate");
  errorP.classList.remove("alert-validate");
}
fetch("../users.json")
  .then((response) => response.json())
  .then((jsonData) => {
    users = jsonData.users;
  })
  .catch((error) => console.error("Error fetching the data:", error));
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
    errorN.setAttribute("data-validate", "Name is required");
  } else {
    errorN.classList.remove("alert-validate");
  }
  if (!password) {
    errorP.classList.add("alert-validate");
    errorP.setAttribute("data-validate", "Password is required");
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
function register() {
  let newUsername = document.getElementById("username").value;
  let newPassword = document.getElementById("password").value;
  let newEmail = document.getElementById("email").value;

  let existingUser = users.find((u) => u.username === newUsername);

  if (existingUser) {
    console.log(existingUser);
    errorN.classList.add("alert-validate");
    errorN.setAttribute("data-validate", "Username already exists");
    flag = false;
  } else {
    errorN.classList.remove("alert-validate");
    //check data enterd or not
    if (!newUsername) {
      errorN.classList.add("alert-validate");
      errorN.setAttribute("data-validate", "Name is required");
      flag = false;
    } else {
      errorN.classList.remove("alert-validate");
    }
    if (!newPassword) {
      errorP.classList.add("alert-validate");
      errorP.setAttribute("data-validate", "Password is required");
      flag = false;
    } else {
      errorP.classList.remove("alert-validate");
    }
    if (!newEmail) {
      errorE.classList.add("alert-validate");
      errorE.setAttribute(
        "data-validate",
        "Valid email is required: ex@abc.xyz"
      );
      flag = false;
    } else {
      errorE.classList.remove("alert-validate");
    }

    console.log(users);
    if (flag === true) {
      console.log("y");
    } else {
      console.log("miss");
    }
  }

  //   // Add the new user to the array
  //   const newUser = { username: newUsername, password: newPassword };
  //   users.push(newUser);

  //   // Save the updated user data to the JSON file (again, server-side logic is needed in a real scenario)
  //   // This is a simplified example and may not work in all environments due to security restrictions
  //   const blob = new Blob([JSON.stringify(users)], { type: 'application/json' });
  //   const url = window.URL.createObjectURL(blob);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = 'users.json';
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);

  //   successElement.textContent = 'Registration successful! You can now log in.';
  //   errorElement.textContent = '';
}
