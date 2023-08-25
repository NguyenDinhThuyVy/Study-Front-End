// What is the API?
// Application Programming Interface
// https://api.github.com/users/evondev
// JSON.parse(data)
const endpoint = "https://api.github.com/users/evondev";
// fetch
const promise = fetch(endpoint);
console.log(promise);
promise
  .then((respone) => {
    console.log(respone);
  })
  .catch((err) => {
    console.log(err);
  });
