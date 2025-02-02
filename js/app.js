const navHamburger = document.getElementById("nav-hamburger");
const navMobile = document.getElementById("nav-bar-mobile");
const navMobileItems = document.querySelectorAll(".nav-mobile-item");

navHamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (navMobile.classList.contains("hidden")) {
    navMobile.style.display = "grid";
    navMobile.classList.remove("hidden");
  } else {
    navMobile.style.display = "none";
    navMobile.classList.add("hidden");
  }
}

navMobileItems.forEach((navitem) => {
  navitem.children[0].addEventListener("click", toggleMenu);
});
