function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (name === "") {
    alert("Please enter your name.");
    return false;
  }

  if (email === "") {
    alert("Please enter your email.");
    return false;
  }

  if (password === "") {
    alert("Please enter your password.");
    return false;
  }
  if (password !== confirmPassword) {
    alert("Password do not match.");
    return false;
  }

  return true;
}
