// https://picsum.photos/v2/list
const endpoint = "https://picsum.photos/v2/list";
async function fetchImage() {
  const images = await fetch(endpoint);
  console.log(images);
}
