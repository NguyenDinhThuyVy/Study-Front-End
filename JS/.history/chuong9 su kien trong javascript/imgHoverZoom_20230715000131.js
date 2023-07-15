window.addEventListener(load, function () {
  const imageCover = document.querySelector(".image-cover");
  imageCover.addEventListener("mousemove", function (e) {
    console.log(e.pageX);
  });
});
