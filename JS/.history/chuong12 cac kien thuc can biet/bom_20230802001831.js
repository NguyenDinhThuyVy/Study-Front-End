// Browser Object Model: alert, prompt, confirm, window
// 1. Location
console.log(location);
console.log(window.location);
// setTimeout(() => {
//   location.href = "https://evon.dev";
// }, 1000);
let params = new URLSearchParams(location.search);
console.log(params);
console.log(params.get("type"));
console.log(params.get("page"));
console.log(params.has("page"));
console.log(params.set("page", 10));
console.log(params.get("page"));
console.log(params.keys());
for (let it of params.values()) {
  console.log(it);
}
params.delete("page");

// 2. History
console.log(window.history);
// history.back(); // quay lại trang trước đó
// history.forward(); // tới trang kế tiếp
// history.go();
