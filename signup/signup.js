


var form = document.querySelector("form"),
  nameField = form.querySelector(".name-field"),
  nameInput = nameField.querySelector(".name"),
  usernameField = form.querySelector(".username-field"),
  usernameInput = usernameField.querySelector(".username"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword");

var inputName = document.getElementById("inputName");
var inputUsername = document.getElementById("inputUsername");
var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
var signBtn = document.getElementById("signBtn");
var message = document.getElementById("message");



  // Name Validtion
function checkname() {
  var namePattern = /^(?=.*[a-z])/;
  if (!inputName.value.match(namePattern)) {
    return nameField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
  }
  nameField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
}

  // Username Validtion
function checkusername() {
  var usernamePattern = /^(?=.*[a-z]{2,3}$)/;
  if (!inputUsername.value.match(usernamePattern)) {
    return usernameField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
  }
  usernameField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
}

// Email Validtion
function checkEmail() {
  var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!inputEmail.value.match(emailPattern)) {
    return emailField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
  }
  emailField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
}



// Password Validation
function createPass() {
  var passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!inputPassword.value.match(passPattern)) {
    return passField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
  }
  passField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
}

// Confirm Password Validtion
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}

//  calling function on key up

inputName.addEventListener("keyup", checkname);
usernameInput.addEventListener("keyup", checkusername);
emailInput.addEventListener("keyup", checkEmail);
passInput.addEventListener("keyup", createPass);
cPassInput.addEventListener("keyup", confirmPass);

// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form submitting
  checkEmail();
  checkname();
  checkusername();
  createPass();
  confirmPass();

 


  if (
    !usernameField.classList.contains("invalid") &&
    !nameField.classList.contains("invalid") &&
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    
    
    // Reset form fields
    form.reset();
     
  
  }
});



var users = [];

if (localStorage.getItem("user") != null) {
  users = JSON.parse(localStorage.getItem("user"));
}

function signUp() {
  var obj = {
    name: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value,
  };
  if (checkInputs() == true) {
    alertMessage("all inputs is required", "red");
  } else {
    if (checkEmailExist() == true) {
      alertMessage("Email already Exist", "red");
    } else {
      users.push(obj);
     

      localStorage.setItem("user", JSON.stringify(users));
      clrInputs();
      alertMessage("success", "green");
      setTimeout(function() {
        window.location.href = '../login/login.html';
      }, 2000);
    }
  }
}


function alertMessage(text, color) {
message.classList.remove("d-none");
message.innerHTML = text;
message.style.color = color;
}

function clrInputs() {
inputName.value = "";
inputEmail.value = "";
inputPassword.value = "";
}

function checkInputs() {
if (
  inputName.value == "" ||
  inputEmail.value == "" ||
  inputPassword.value == ""
)
  return true;
else return false;
}

function checkEmailExist() {
for (var i = 0; i < users.length; i++) {
  if (users[i].email == inputEmail.value) return true;
}
}

signBtn.addEventListener("click", signUp);
