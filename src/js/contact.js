
document.addEventListener("DOMContentLoaded", function() {

  // Typed.js initialization
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 40,
    backSpeed: 20,
    loop: true
  });

  // Change the copyright
  const copyRight = document.getElementById("copyright"); // Auto Update Copyright
  const currentYear = new Date().getFullYear();
  copyRight.innerHTML = "ASK ESP ©" + currentYear;
  AOS.init();
});
