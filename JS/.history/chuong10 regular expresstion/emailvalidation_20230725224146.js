// valid email: abc@gmail.com abc@yahoo.com
// invalid email: abc
window.addEventListener("load", function () {
  const emailInput = document.querySelector(".input");
  emailInput.addEventListener("input", function (e) {
    const value = emailInput.value;
    // console.log(value);
  });
});
