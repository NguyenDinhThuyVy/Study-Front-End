const header = document.querySelector(".header");
window.addEventListener("scroll", function (e) {
  const scrollY = window.pageYOffset;
  console.log(scrollY);
  if (scrollY >= 67) {
    header && header.classList.add("is-fixed");
    if (header) {
      header.classList.add("is-fixed");
    }
  }
});
