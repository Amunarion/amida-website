/*
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onscroll = stickyNav();

https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
*/

const menu = document.getElementById("navbar-mobile-menu");
const burgerMenu = document.getElementById("burgermenu");
const body = document.getElementById("home");

function toggleMenu() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    burgerMenu.src = "images/Burgermenu.png";
    burgerMenu.alt = "Open the menu";
  } else {
    menu.style.display = "block";
    burgerMenu.src = "images/CloseButton.png";
    burgerMenu.alt = "Close the menu";
  }
}

body.addEventListener("keydown", escClose);

function escClose(key) {
  if (key.keyCode === 27) {
    menu.style.display = "none";
  }
}
