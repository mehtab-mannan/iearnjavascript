document.getElementById("login-submit").addEventListener("click", function () {
  console.log("clicked");
  //get email
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  console.log(userEmail);
  // get password
  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;

  // check email and password
  if (userEmail == "sumu123@bank.com" && userPassword == "secret") {
    window.location.href = "banking.html";
    console.log("valid user");
  }
});
