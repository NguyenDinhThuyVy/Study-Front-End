window.addEventListener("load", function () {
  const links = [...document.querySelectorAll(".menu1-link")];
  links.forEach((item) => item.addEventListener("mouseenter", handleHoverLink));
  const line = document.createElement("div");
  function handleHoverLink(e) {
    console.log(e.target);
  }
});
