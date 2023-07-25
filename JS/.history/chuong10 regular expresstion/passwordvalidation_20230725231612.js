window.addEventListener("load", function () {
  const passInput = document.querySelector(".input");

  passInput.addEventListener("input", function (e) {
    const value = e.target.value;
    const checkLengthClass = e.target.parentNode.querySelector(".check-length");
    const checkUpperClass = e.target.parentNode.querySelector(".check-upper");
    const checkNumberClass = e.target.parentNode.querySelector(".check-number");
    const checkSpecialClass =
      e.target.parentNode.querySelector(".check-special");
    // console.log(value);
    if (value.length < 8) {
      // console.log("huhu");
    }
  });
});
