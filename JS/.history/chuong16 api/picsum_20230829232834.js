// https://picsum.photos/v2/list
const endpoint = "https://picsum.photos/v2/list";
const imageList = document.querySelector(".images");
{
  /* <div class="image-item">
        <img src="https://source.unsplash.com/random" alt="" />
      </div> */
}
function imageTemplate() {}
async function fetchImage() {
  const respone = await fetch(endpoint);
  const images = await respone.json();
  console.log(images);
}
fetchImage();
