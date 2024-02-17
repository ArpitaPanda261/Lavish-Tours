document.getElementById("contactForm").addEventListener("submit", function(event){
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  
  document.getElementById("successMessage").style.display = "block";
  document.getElementById("errorMessage").style.display = "none";


});


/*var map = L.map("map").setView([20.2961, 85.82], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([20.2961, 85.82])
  .addTo(map)
  .bindPopup("Bhubaneswar")
  .openPopup();*/
