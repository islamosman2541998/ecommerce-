var form = document.querySelector("form"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password");

// Email Validation
function checkEmail() {
  var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    return emailField.classList.add("invalid"); // Adding invalid class if email value does not match with email pattern
  }
  emailField.classList.remove("invalid"); // Removing invalid class if email value matches with emailPattern
}

// Password Validation
function createPass() {
  var passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid"); // Adding invalid class if password input value does not match with passPattern
  }
  passField.classList.remove("invalid"); // Removing invalid class if password input value matches with passPattern
}

// Calling function on key up
emailInput.addEventListener("keyup", checkEmail);
passInput.addEventListener("keyup", createPass);

// Calling function on form submit
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Preventing form submission
  checkEmail();
  createPass();

  if (
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid")
  ) {
    // Get stored users from localStorage
    var storedUsers = JSON.parse(localStorage.getItem('user')) || [];

    // Check if email and password match any stored user
    var user = storedUsers.find(function(user) {
      return user.email === emailInput.value && user.password === passInput.value;
    });

    var loginMessage = document.createElement('div');
    loginMessage.classList.add('login-message');

    if (user) {
      loginMessage.textContent = 'Login successful';
      loginMessage.style.color = 'green';
      document.body.appendChild(loginMessage);
      
      setTimeout(function() {
        window.location.href = '../index.html';
      }, 2000);
    } else {
      loginMessage.textContent = 'Invalid email or password';
      loginMessage.style.color = 'red';
      document.body.appendChild(loginMessage);
    }
    
    // Reset form fields
    form.reset();
  }
});