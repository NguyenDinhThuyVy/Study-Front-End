const accordionHeaders = document.querySelectorAll(".accordion-header");
// console.log(accordionHeaders);
[...accordionHeaders].forEach((item) =>
  item.addEventListener("click", handleClickAccrodion)
);
function handleClickAccrodion(e) {
  // console.log(e.target);
  const contnet = e.target.nextElementSibling;
  console.log(content.scrollHeight);
  e.target.nextElementSibling.classList.toggle("is-active");
  const icon = e.target.querySelector(".icon");
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}
