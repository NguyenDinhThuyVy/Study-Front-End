window.addEventListener("load", function () {
  const imgs = document.querySelectorAll(".container img");
  window.addEventListener("scroll", function () {
    const windowScroll = window.pageYOffset;
    console.log(windowScroll)
    [...imgs].forEach((item) => {

    });
  });
});
