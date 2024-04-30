// Navbar canvas
const stickyTop = document.querySelector(".sticky-top");
const offCanvas = document.querySelector(".offcanvas");

// ketika offcanvas di buka
offCanvas.addEventListener("show.bs.offcanvas", function () {
  stickyTop.style.overflow = "visible";
  document.querySelector(".navbar-nav").classList.remove("topBotomBordersOut");
});
// ketika offcanvas ditutup
offCanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
  document.querySelector(".navbar-nav").classList.add("topBotomBordersOut");
});

// ketika navbar di scorll
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    document.querySelector(".mynavbar").classList.add("scroll");
  } else {
    document.querySelector(".mynavbar").classList.remove("scroll");
  }
});
