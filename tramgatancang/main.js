// Set your password here
const correctPassword = "doanketlasucmanh";

function checkPassword() {
  const input = document.getElementById("passwordInput");
  const errorMsg = document.getElementById("errorMessage");
  const successMsg = document.getElementById("successMessage");
  const password = input.value;

  // Hide previous messages
  errorMsg.style.display = "none";
  successMsg.style.display = "none";

  if (password === correctPassword) {
    // Show success message
    successMsg.style.display = "block";

    // Transition to content page after a short delay
    setTimeout(() => {
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("contentPage").style.display = "block";
    }, 1000);
  } else {
    // Show error message
    errorMsg.style.display = "block";
    input.value = "";
    input.focus();
  }
}

function logout() {
  // Reset the form
  document.getElementById("passwordInput").value = "";
  document.getElementById("errorMessage").style.display = "none";
  document.getElementById("successMessage").style.display = "none";

  // Show login form and hide content
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("contentPage").style.display = "none";
}

// Allow Enter key to submit password
document
  .getElementById("passwordInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      checkPassword();
    }
  });
