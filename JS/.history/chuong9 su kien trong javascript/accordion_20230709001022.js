const accordionHeaders = document.querySelectorAll(".accordion-header");
// console.log(accordionHeaders);
[...accordionHeaders].forEach((item) =>
  item.addEventListener("click", handleClickAccrodion)
);
function handleClickAccrodion(e) {
  // console.log(e.target);
  const content = e.target.nextElementSibling;
  console.log(content.scrollHeight);
  // scrollHeight : chiều cao của phần tử bao gồm padding
  content.style.height = `${content.scrollHeight}px`;
  content.classList.toggle("is-active");
  if (!content.classList.contains("is-active")) {
    content.style.height = "0px";
  }
  const icon = e.target.querySelector(".icon");
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}
