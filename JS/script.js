const menu = document.querySelector(".menu");
const toggleHeader = document.querySelector(".toggle-menu");
menu.addEventListener("click", function () {
  if (toggleHeader.style.visibility == "visible") {
    toggleHeader.style.visibility = "hidden";
  } else {
    toggleHeader.style.visibility = "visible";
  }
});
