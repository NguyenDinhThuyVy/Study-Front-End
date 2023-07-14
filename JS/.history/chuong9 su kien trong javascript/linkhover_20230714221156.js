window.addEventListener("load", function () {
  const links = [...document.querySelectorAll(".menu1-link")];
  links.forEach((item) => item.addEventListener("mouseenter", handleHoverLink));
  const line = document.createElement("div");
  line.className = "line-effect";
  document.body.appendChild(beginend, line);
  function handleHoverLink(e) {
    console.log(e.target);
  }
});
