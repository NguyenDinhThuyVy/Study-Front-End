window.addEventListener("load", function () {
  const links = [...document.querySelectorAll(".menu1-link")];
  links.forEach((item) => item.addEventListener("mouseenter", handleHoverLink));
  const line = document.createElement("div");
  line.className = "line-effect";
  document.body.appendChild(line);
  function handleHoverLink(e) {
    // console.log(e.target);
    const { left, top, width, height } = e.target.getBoundingClientRect();
    // console.log({ left, top, width, height });
    const offsetBottom = 5;
    line.style.width = `${width}px`;
    line.style.height = `${height * 0.1}px`;
    line.style.left = `${left}px`;
    line.style.top = `${height + top + offsetBottom}px`;
  }
});
