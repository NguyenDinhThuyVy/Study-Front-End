window.addEventListener("load", function () {
  const input = document.querySelector(".input-search");
  const items = document.querySelectorAll(".dropdown-item");
  input.addEventListener("keypress", handleHighligh);
  let filter = "";
  function handleHighligh(e) {
    // console.log(e.key);
    filter = filter + e.key;
    // console.log(filter);
    filter = filter.toLowerCase();
  }
});
