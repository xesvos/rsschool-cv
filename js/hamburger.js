const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-list__link");

const darken = document.querySelector(".darken");

// const main = document.querySelector(".main");
// const footer = document.querySelector(".footer");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  darken.classList.toggle("active");

  // main.classList.toggle("darken");
  // footer.classList.toggle("darken");
});

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

    darken.classList.remove("active");

    // main.classList.remove("darken");
    // footer.classList.remove("darken");
  })
);
