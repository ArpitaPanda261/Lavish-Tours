document.getElementById("contactForm").addEventListener("submit", function(event){
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // You can perform form validation here

  // For demonstration purposes, just show success message
  document.getElementById("successMessage").style.display = "block";
  document.getElementById("errorMessage").style.display = "none";

  // You can also send the form data to a server using AJAX
});