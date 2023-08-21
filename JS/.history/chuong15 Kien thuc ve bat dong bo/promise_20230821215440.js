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
// onFullfilled -> resolve
// onRejected -> reject
let haveIphone = makePromise(false);
haveIphone
  .then(
    (success) => {
      // console.log(success);
      // console.log("Im still happy");
    }
    // undefined,
    // (reason) => console.log(reason)
  )
  .catch((error) => {
    // console.log(error);
    // console.log("Im still happy");
  })
  .finally(() => {
    // console.log("Im still happy");
  });

// Exercise
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("1. run the first time");
//   }, 3000);
// })
//   .then((data) => {
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         resolve("2. run the second time");
//       }, 1000);
//     });
//   })
//   .then((data) => {
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         resolve("3. run the third time");
//       }, 1000);
//     });
//   })
//   .then((data) => {
//     console.log(data);
//   });
// setTimeout(() => {
//   console.log("run the first time");
//   setTimeout(() => {
//     console.log("run the second time");
//     setTimeout(() => {
//       console.log("run the third time");
//       setTimeout(() => {
//         console.log("run the fourth time");
//         setTimeout(() => {
//           console.log("run the fifth time");
//         }, 2000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 3000);

// Promise.all
// Trả về resolve khi tất cả promises truyền vào đều resolve
// Trả về rejected khi có 1 cái promise nào đó bị reject
function makeTimer(timer = 1000, str) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(str);
    }, timer);
  });
}
const timer1 = makeTimer(1000, "first time");
const timer2 = makeTimer(2000, "second time");
const timer3 = makeTimer(3000, "third time");
const timerTotal = Promise.all([timer1, timer2, timer3]).then((data) => {
  // console.log(data);
});
// Promise.race -> nhanh nhất thì hiển thị
const timerTotal2 = Promise.race([timer1, timer2, timer3]).then((data) => {
  // console.log(data); //  first time
});
