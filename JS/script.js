const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
menu.addEventListener("click", function () {
  if (
    overlay.style.visibility == "visible"
  ) {
    overlay.style.visibility = "hidden";
  } else {
    overlay.style.visibility = "visible";
  }
});
