// valid email: abc@gmail.com abc@yahoo.com
// invalid email: abc
window.addEventListener("load", function () {
  const emailInput = document.querySelector(".input");
  emailInput.addEventListener("input", function (e) {
    const value = emailInput.value;
    // console.log(value);
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  });
});
