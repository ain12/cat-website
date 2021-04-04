const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
menu.addEventListener("click", function () {
  if (overlay.style.visibility == "visible") {
    overlay.style.visibility = "hidden";
  } else {
    overlay.style.visibility = "visible";
  }
});

//Contact form
$(".submitBtn").click(function (event) {
  console.log("click");

  let name = $(".name").val();
  let email = $(".email").val();
  let subject = $(".subject").val();
  let message = $(".message").val();
  let status = $(".form-status");

  function isValid(email) {
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  if (!isValid(email)) {
    event.preventDefault();
    status.append("<div>Invalid email</div>");
  } else {
    console.log("Valid Email");
  }

  if (name.length > 1) {
    console.log("Valid name");
  } else {
    event.preventDefault();
    status.append("<div>El nom no és valid</div>");
  }

  if (subject.length >= 2) {
    console.log("valid subject");
  } else {
    event.preventDefault();
    status.append("<div>El titol no és valid</div>");
  }

  if (message.length >= 10) {
    console.log("valid message");
  } else {
    event.preventDefault();
    status.append("<div>El missatge no és valid</div>");
  }
});
