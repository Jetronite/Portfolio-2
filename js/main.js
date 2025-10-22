// Highlight active nav link
const navLinks = document.querySelectorAll(".nav-links a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Handle contact form submission
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorBox = document.getElementById("error-message");
    const confirmationBox = document.getElementById("confirmation-message");

    // Clear previous feedback
    errorBox.textContent = "";
    confirmationBox.textContent = "";

    // Validation checks
    if (!name || !email || !message) {
      errorBox.classList.add("display-on-success");
      errorBox.textContent = "Please fill out all fields.";
      return;
    }

    if (message.length < 10) {
      errorBox.classList.add("display-on-success");
      errorBox.textContent = "Message must be at least 10 characters long.";
      return;
    }

    if (!email.endsWith("@gmail.com")) {
      errorBox.classList.add("display-on-success");
      errorBox.textContent = "Email must be a valid Gmail address.";
      return;
    }

    // Success feedback
    confirmationBox.classList.add("display-on-success");
    confirmationBox.textContent = `Thanks, ${name}! Your message was sent successfully.`;
    confirmationBox.style.display = "block";

    // Reset form after a short delay
    form.reset();

    // Hide confirmation after 4 seconds
    setTimeout(() => {
      confirmationBox.style.display = "none";
    }, 4000);
  });
}
