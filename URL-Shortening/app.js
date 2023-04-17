// Use shrtcode API
const navbarToggle = document.querySelector(".navbar-toggle");
const navLinks = document.querySelector(".nav-links");
const listItems = document.querySelectorAll("li");

navbarToggle.addEventListener("click", function(){
    navLinks.classList.toggle("menu");
})