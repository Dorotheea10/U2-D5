const EVENT_POSY = 400;
const startedButtonRef = document.getElementById("startedButton");

function handleScroll() {
  if (window.scrollY >= EVENT_POSY) {
    startedButtonRef.classList.add("green-button");
  } else {
    startedButtonRef.classList.remove("green-button");
  }
}

window.addEventListener("scroll", handleScroll);
