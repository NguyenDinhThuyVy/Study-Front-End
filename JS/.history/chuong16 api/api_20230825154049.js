// What is the API?
// Application Programming Interface
// https://api.github.com/users/evondev
// JSON.parse(data)
const endpoint = "https://api.github.com/users";
const userEl = document.querySelector(".username");
// const username=
// fetch
async function displayUser(username) {
  userEl.textContent = "Loading...";
  const promise = await fetch(`${endpoint}/${username}`);
  const data = await promise.json();
  userEl.textContent = `${data.bio}`;
  console.log("displayUser~ promise", promise);
  console.log("displayUser~ data", data);
  // console.log(promise);
  // promise
  //   .then((respone) => {
  //     return respone.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     console.log(data.bio);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
}
function handleError(err) {
  console.log("Something wrong with your api");
}
displayUser("evondev").catch(handleError);
