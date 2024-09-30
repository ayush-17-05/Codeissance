document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Form validation (example logic)
  const agreementChecked = document.getElementById("agreement").checked;

  if (!agreementChecked) {
    document.getElementById("errorMessage").textContent =
      "Please agree to the terms and conditions.";
    return;
  }

  // Perform submission logic here
  alert("Form submitted successfully!");
});
