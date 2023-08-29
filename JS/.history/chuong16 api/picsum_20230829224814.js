// https://picsum.photos/v2/list
const endpoint = "https://picsum.photos/v2/list";
async function fetchImage() {
  const respone = await fetch(endpoint);
  const images = await respone.json();
  console.log(images);
}
fetchImage();
