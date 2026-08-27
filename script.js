// =========================
// Explore Button
// =========================

const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", function () {
    alert("Welcome to Wanderlust! 🌍 Let's explore the world.");
});


// =========================
// Book Now Buttons
// =========================

const bookButtons = document.querySelectorAll("#packages button");

bookButtons.forEach(function (button) {

    button.addEventListener("click", function () {
        alert("Thank you for choosing Wanderlust! ✈️ Booking will be available soon.");
    });

});


// =========================
// Contact Form Validation
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    // Check empty fields
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
    }


    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }


    // Successful submission
    alert("Thank you, " + name + "! Your message has been submitted.");

    contactForm.reset();
});