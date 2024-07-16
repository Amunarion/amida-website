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

function toggleMenu() {
  const menu = document.getElementById("navbar-mobile-menu");
  const burgerMenu = document.getElementById("burgermenu");

  if (menu.style.display === "block") {
    menu.style.display = "none";
    burgerMenu.src = "images/Burgermenu.png";
  } else {
    menu.style.display = "block";
    burgerMenu.src = "images/CloseButton.png";
  }
}
