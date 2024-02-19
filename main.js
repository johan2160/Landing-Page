const hamburgerMenu = document.getElementById("hamburger-menu");
const ul = document.querySelector("ul");
const logo = document.querySelector(".logo");
const currentYearSpan = document.querySelector("#current-year");

const toggleMenu = () => {
  ul.classList.toggle("active");
  logo.classList.toggle("inactive");
};

hamburgerMenu.addEventListener("click", toggleMenu);

// Getting the current year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
currentYearSpan.textContent = currentYear;
