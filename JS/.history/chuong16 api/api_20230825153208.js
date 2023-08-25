// What is the API?
// Application Programming Interface
// https://api.github.com/users/evondev
// JSON.parse(data)
const endpoint = "https://api.github.com/users";
// const username=
// fetch
async function displayUser(username) {
  const promise = await fetch(`${endpoint}/${username}`);
  console.log(promise);
  promise
    .then((respone) => {
      return respone.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.bio);
    })
    .catch((err) => {
      console.log(err);
    });
}
displayUser("evondev");
