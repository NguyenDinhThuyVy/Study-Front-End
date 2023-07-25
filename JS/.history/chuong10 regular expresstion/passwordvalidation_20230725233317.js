window.addEventListener("load", function () {
  const passInput = document.querySelector(".input");

  passInput.addEventListener("input", function (e) {
    const value = e.target.value;
    const checkLengthClass = e.target.parentNode.querySelector(".check-length");
    const checkUpperClass = e.target.parentNode.querySelector(".check-upper");
    const checkNumberClass = e.target.parentNode.querySelector(".check-number");
    const checkSpecialClass =
      e.target.parentNode.querySelector(".check-special");
    const checkItems = e.target.parentNode.querySelectorAll(".check-item");
    // console.log(value);
    if (!value) {
      [...checkItems].forEach((item) => {
        item.classList.remove("active");
        item.classList.remove("unactive");
      });
      return;
    }
    if (value.length < 8) {
      // console.log("huhu");
      checkLengthClass.classList.add("unactive");
      checkLengthClass.classList.remove("active");
    } else {
      checkLengthClass.classList.add("active");
      checkLengthClass.classList.remove("unactive");
    }
    // Kiểm tra có 1 ký tự in hoa
    if (!/[A-Z]/.test(value)) {
      checkUpperClass.classList.add("unactive");
      checkUpperClass.classList.remove("active");
    } else {
      checkUpperClass.classList.add("active");
      checkUpperClass.classList.remove("unactive");
    }
    // Kiển tra có số
    if (!/[0-9]/.test(value)) {
      checkNumberClass.classList.add("unactive");
      checkNumberClass.classList.remove("active");
    } else {
      checkNumberClass.classList.add("active");
      checkNumberClass.classList.remove("unactive");
    }
  });
});
