window.addEventListener("load", function () {
  const text = this.document.querySelector(".text");
  text.addEventListener("mouseenter", function (e) {
    const title = e.target.dataset.tooltip;
    // console.log(title);
    const tooltipDiv = document.createElement("div");
    tooltipDiv.className = "tooltip-text";
    tooltipDiv.textContent = title;
    document.body.appendChild(tooltipDiv);
    const cords = e.target.getBoundingClientRect();
    // console.log(cords);
    const { top, left, width, height } = cords;
    const tooltipHeight = tooltipDiv.offsetHeight;
    const triangleHeight = 20;
    const tooltipWidth = tooltipDiv.offsetWidth;
    tooltipDiv.style.left = `${left - tooltipWidth / 2}px`;
    tooltipDiv.style.top = `${top - tooltipHeight - triangleHeight}px`;
    tooltipDiv.style.width = `${width}px`;
    tooltipDiv.style.height = `${height}px`;
  });
});
