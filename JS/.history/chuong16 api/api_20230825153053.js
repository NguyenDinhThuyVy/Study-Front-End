// What is the API?
// Application Programming Interface
// https://api.github.com/users/evondev
// JSON.parse(data)
const endpoint = "https://api.github.com/users";
const
// fetch
function displayUser(username) {
  const promise = fetch(`${endpoint}/${username}`);
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
