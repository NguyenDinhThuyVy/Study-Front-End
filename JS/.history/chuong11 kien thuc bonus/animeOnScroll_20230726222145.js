window.addEventListener("load", function () {
  const imgs = document.querySelectorAll(".container img");
  window.addEventListener("scroll", function () {
    const windowScrollTop = window.pageYOffset;
    // console.log(windowScrollTop);
    [...imgs].forEach((item) => {
      const itemOffsetTop = item.offsetTop;
      // console.log(itemOffsetTop);
      if (windowScrollTop > itemOffsetTop - item.offsetHeight) {
        item.classList.add("active");
      }
    });
  });
});
