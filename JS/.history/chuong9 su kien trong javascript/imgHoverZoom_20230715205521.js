window.addEventListener("load", function () {
  const imageCover = document.querySelector(".image-cover");
  const imageWrapper = document.querySelector(".image-wrapper");
  const image = document.querySelector(".image1");
  let imageWraperWidth = imageWrapper.offsetWidth;
  let imageWraperHeight = imageWrapper.offsetHeight;
  imageCover.addEventListener("mousemove", function (e) {
    // console.log(e.pageX);
    const pX = e.pageX;
    const pY = e.pageY;
    image.style = "width:auto; height:auto; max-height:unset";
    let imageWidth = image.offsetWidth;
    let imageHeight = image.offsetHeight;
    let radioX = imageWidth / imageWraperWidth / 2;
    let radioY = imageHeight / imageWraperHeight / 2;
    let x = pX * radioX;
    let y = pY * radioY;
    console.log(x);
    // console.log(imageWidth, imageHeight);
    // console.log(imageWraperWidth, imageWraperHeight);
    image.style = `left:${-x}px;  top:${0}px; width:auto;  height:auto;  max-height:unset; transform: none `;
  });
});
