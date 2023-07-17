window.addEventListener("load", function () {
  const togglePassword = document.querySelector(".toggle");
  togglePassword.addEventListener("click", function (e) {
    const input = this.previousElementSibling;
    const inputType = e.target.getAttribute(type);
    console.log(inputType);
  });
});
