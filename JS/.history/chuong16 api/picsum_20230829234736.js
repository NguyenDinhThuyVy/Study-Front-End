// https://picsum.photos/v2/list
const endpoint = `https://picsum.photos/v2/list?limit=8`;
const imageList = document.querySelector(".images");
const loadmore = document.querySelector(".loadMore");
{
  /* <div class="image-item">
        <img src="https://source.unsplash.com/random" alt="" />
      </div> */
}
function imageTemplate(url) {
  const template = `<div class="imageItem ">
<img src="${url}" alt="" />
</div>`;
  imageList.insertAdjacentHTML("beforeend", template);
}
async function fetchImage() {
  const respone = await fetch(endpoint);
  const images = await respone.json();
  console.log(images);
  if (images.length > 0 && Array.isArray(images)) {
    images.forEach((item) => {
      imageTemplate(item.download_url);
    });
  }
}
async function fetchImages(page = 1) {
  loading.style.display = "block";
  loadmore.style.display = "none";
  const response = await fetch(`${endpoint}&page=${page}`);
  const images = await response.json();
  if (images.length > 0 && Array.isArray(images)) {
    loading.style.display = "none";
    loadmore.style.display = "block";
    images.forEach((item) => {
      imageTemplate(item.download_url);
    });
  }
}
async function handleLoadMore() {
  page++;
  await fetchImages(page);
}
loadmore.addEventListener("click", handleLoadMore);
fetchImage();
