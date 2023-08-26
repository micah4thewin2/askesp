document.addEventListener("DOMContentLoaded", function() {

  // Change the copyright
  const copyRight = document.getElementById("copyright"); // Auto Update Copyright
  const currentYear = new Date().getFullYear();
  copyRight.innerHTML = "ASK ESP ©" + currentYear;
  AOS.init();


});
