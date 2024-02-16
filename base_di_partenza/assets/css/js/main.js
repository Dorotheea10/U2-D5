// Aggiungi uno script JavaScript alla fine del tuo documento HTML
document.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var scrollPosition = window.scrollY;

  // Aggiungi la classe "navbar-scrolled" quando la posizione di scorrimento supera la sezione gialla
  if (scrollPosition > document.querySelector(".hero-section").offsetHeight) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});
