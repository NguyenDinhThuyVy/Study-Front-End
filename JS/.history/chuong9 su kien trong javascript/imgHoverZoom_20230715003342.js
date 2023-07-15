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
    let imageWraperHeight = imageWrapper.offsetHeight;
    let x = pX;
    console.log(x);
    // console.log(imageWidth, imageHeight);
    // console.log(imageWraperWidth, imageWraperHeight);
    image.style = `left:${0}px;  top:${0}px; width:auto;  height:auto;  max-height:unset `;
  });
});
