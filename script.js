document.getElementById("reservation-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_k2ppp1k", "template_ovxurcj", this)
      .then(function() {
        alert("✅ Reservation request sent successfully! We’ll contact you soon.");
      }, function(error) {
        alert("❌ Failed to send reservation. Please try again.");
        console.log("Error:", error);
      });
});
