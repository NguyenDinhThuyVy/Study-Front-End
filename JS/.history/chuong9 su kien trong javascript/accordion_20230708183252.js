const accordionHeaders = document.querySelectorAll(".accordion-header");
// console.log(accordionHeaders);
[...accordionHeaders].forEach((item) =>
  item.addEventListener("click", handleClickAccrodion)
);
function handleClickAccrodion(e) {
  // console.log(e.target);
  e.target.nextElementSibling.classList.toggle("is-active");
}
