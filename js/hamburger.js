const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-list__link");

const darken = document.querySelector(".darken");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  darken.classList.toggle("active");
});

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

    darken.classList.remove("active");
  })
);
