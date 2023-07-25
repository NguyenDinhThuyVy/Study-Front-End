window.addEventListener("load", function () {
  const passInput = document.querySelector(".input");

  passInput.addEventListener("input", function (e) {
    const value = e.target.value;
    // console.log(value);
    if (value.length < 8) {
      console.log("huhu");
    }
  });
});
