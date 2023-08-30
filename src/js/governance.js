document.addEventListener("DOMContentLoaded", function() {
  // Typed.js initialization
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 40,
    backSpeed: 20,
    loop: true
  });

  // Update for Governance page
  if (window.location.pathname === '/governance') {
    // Additional JS code specific to the Governance page can go here
  }

  // Existing code
  const copyRight = document.getElementById("copyright");
  const currentYear = new Date().getFullYear();
  copyRight.innerHTML = "ASK ESP ©" + currentYear;
  AOS.init();
});
