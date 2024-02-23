function validateForm() {
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const zipCode = document.getElementById("zipCode").value;
  const terms = document.getElementById("terms").checked;
  const url = document.getElementById("url").value;
  const date = document.getElementById("date").value;
  const file = document.getElementById("file").files[0];
  const country = document.getElementById("country").value;

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email format");
    return false;
  }

  if (isNaN(age) || age < 1 || age > 120) {
    alert("Invalid age");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  let zipCodeRegex = /^\d{5}(-\d{4})?$/;
  if (!zipCodeRegex.test(zipCode)) {
    alert("Invalid zip code format");
    return false;
  }

  if (!terms) {
    alert("Please agree to terms and conditions");
    return false;
  }

  let urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  if (!urlRegex.test(url)) {
    alert("Invalid URL format");
    return false;
  }

  let currentDate = new Date().toISOString().slice(0, 10);
  if (date > currentDate) {
    alert("Date cannot be set in the future");
    return false;
  }

  let fileSizeLimit = 1024 * 1024; // 1 MB
  if (file && file.size > fileSizeLimit) {
    alert("File size exceeds limit");
    return false;
  }

  if (country === "") {
    alert("Please select a country");
    return false;
  }

  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter",
    );
    return false;
  }

  return true;
}
