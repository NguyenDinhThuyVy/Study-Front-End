const header = document.querySelector(".headers");
window.addEventListener("scroll", function (e) {
  const scrollY = window.pageYOffset;
  console.log(scrollY);
  if (scrollY >= 90) {
    header && header.classList.add("is-fixed");
    // if (header) {
    //   header.classList.add("is-fixed");
    // }
  }
});
