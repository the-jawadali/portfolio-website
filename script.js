// scripts.js

// Mobile navbar toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
  
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }
  
    // Optional: Close mobile menu when a link is clicked
    document.querySelectorAll("#mobile-menu a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  });
  
  // Contact form submission
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        // Placeholder form handling logic
        const name = form.querySelector("input[name='name']").value;
        const email = form.querySelector("input[name='email']").value;
        const message = form.querySelector("textarea[name='message']").value;
  
        console.log("Form Submitted:", { name, email, message });
  
        alert("Thank you for your message, " + name + "!");
  
        // Reset form
        form.reset();
      });
    }
  });
  