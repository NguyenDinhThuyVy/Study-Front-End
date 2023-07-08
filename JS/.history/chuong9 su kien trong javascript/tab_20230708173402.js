const tabItem = document.querySelectorAll(".tab-item");
[...tabItem].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(event) {
  [...tabItem].forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");
}
