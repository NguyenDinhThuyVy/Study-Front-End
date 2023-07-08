const accordionHeaders = document.querySelectorAll(".accordion-header");
// console.log(accordionHeaders);
[...accordionHeaders].forEach((item) =>
  item.addEventListener("click", handleClickAccrodion)
);
