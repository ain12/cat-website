const menu = document.querySelector(".menu");
const toggleHeader = document.querySelector(".toggle-menu");
const overlay = document.querySelector(".overlay");
menu.addEventListener("click", function () {
  if (
    overlay.style.visibility == "visible" &&
    toggleHeader.style.visibility == "visible"
  ) {
    overlay.style.visibility = "hidden";
    toggleHeader.style.visibility = "hidden";
  } else {
    overlay.style.visibility = "visible";
    toggleHeader.style.visibility = "visible";
  }
});
