/**
 * status: pending
 * status: resolve
 * status: reject
 */
// new Promise(function(resolve, reject))
// let buyIphone = true;
// let willBuyIphone = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     if (buyIphone) {
//       resolve("Oh yeah I have new Iphone");
//       console.log("OK");
//     } else {
//       reject("Oh no, I dont have new Iphone");
//       console.log("not OK");
//     }
//   }, 5000);
// });
// console.log(willBuyIphone);

// .then(onFullfilled, onRejected)
function makePromise(buyIphone) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (buyIphone) {
        resolve("Oh yeah I have new Iphone");
      } else {
        reject("Oh no, I dont have new Iphone");
      }
    }, 5000);
  });
}
let haveIphone = makePromise(false);
haveIphone.then(
  (success) => {
    console.log(success);
    // console.log("Im still happy");
  },
  // undefined,
  (reason) => console.log(reason)
);
