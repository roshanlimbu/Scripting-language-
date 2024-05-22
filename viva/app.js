function validateForm(e) {
  e.preventDefault();
  let valid = true;

  const email = document.getElementById("email").value;
  const emailPatternValidate = /^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPatternValidate.test(email)) {
    alert("Please enter a valid email address:");
    valid = false;
  }

  const age = document.getElementById("age").value;
  if (isNaN(age) || age < 0 || age > 110) {
    alert("Please enter a valid age.");
    valid = false;
  }

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword || password.length < 8) {
    alert("Passwords do not match.");
    valid = false;
  }
  const zip = document.getElementById("zip").value;
  const zipPattern = /^\d{5}(-\d{4})?$)/;
  if (!zipPattern.test(zipPattern)) {
    alert("please enter a proper zip address.");
    valid = false;
  }

  const terms = document.getElementById("terms").checked;
  if (!terms) {
    alert("Please agree to terms and conditions");
    valid = false;
  }

  const url = document.getElementById("url").value;
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  if (!urlPattern.test(url)) {
    alert("Please enter a valid URL");
    valid = false;
  }

  const date = document.getElementById("date").value;
  const today = new Date();
  if (date > today) {
    alert("The date cannot be set in the future.");
    valid = false;
  } else {
    valid = true;
  }

  const file = document.getElementById("file").files[0];
  const fileSizeLimit = 2 * 1024 * 1024;
  if (file && file.size > fileSizeLimit) {
    alert("The file size must be less than 2 MB.");
    valid = false;
  }
  const country = document.getElementById("country").value;
  if (country === "" || NULL || undefined) {
    alert("Please select a country.");
    valid = false;
  }

  const passwordStrengthPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordStrengthPattern.test(password)) {
    alert(
      "Password must be at least 8 characters long and include uppercase, lowercase, numeric, and special characters.",
    );
    valid = false;
  }

  if (valid) {
    alert("Thank you for submitting the form!");
    document.getElementById("registerForm").submit();
  }
}
