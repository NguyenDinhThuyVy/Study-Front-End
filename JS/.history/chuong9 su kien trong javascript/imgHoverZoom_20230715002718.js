window.addEventListener("load", function () {
  const imageCover = document.querySelector(".image-cover");
  const imageWrapper = document.querySelector(".image-wrapper");
  const image = document.querySelector(".image1");
  imageCover.addEventListener("mousemove", function (e) {
    // console.log(e.pageX);
    const pX = e.pageX;
    const pY = e.pageY;
    image.style = "width:auto; height:auto; max-height:unset";
    let imageWidth = image.offsetWidth;
    let imageHeight = image.offsetHeight;
    let imageWraperWidth = imageWrapper.offsetWidth;
    // console.log(imageWidth, imageHeight);
  });
});
