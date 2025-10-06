
document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get values and trim any extra spaces
  const name = document.getElementById("name").value.trim();
  const gameName = document.getElementById("gameName").value.trim();
  const gameId = document.getElementById("gameId").value.trim();
  const email = document.getElementById("email").value.trim();
  const transactionId = document.getElementById("transactionId").value.trim();

  // IMPORTANT: Change this to your actual email address
  // If you don't change this, the registration won't go to your account.
  const toEmail = "hwaran686@gmail.com";  

  // Subject - This uses backticks (`) to successfully insert the variable ${name}
  const subject = `HW Battle Arena Registration - ${name}`;

  // Email Body - This uses backticks (`) and is a multi-line string to correctly insert all variables
  const body = `Full Name: ${name}
Game Name: ${gameName}
Game ID: ${gameId}
Email: ${email}
Transaction ID: ${transactionId}

Mail attaches the GPay screenshot.`;

  // Create mailto link - Encode the subject and body
  const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open the mail app
  window.location.href = mailtoLink;

  // Show success message on the page
  document.getElementById("successMessage").style.display = "block";

  // Reset form fields
  document.getElementById("registrationForm").reset();
});