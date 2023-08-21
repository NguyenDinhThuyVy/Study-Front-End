function wait(str, timer = 0) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, timer);
  });
}
// await wait(2000);
// function expression
async function run() {
  console.log("starting");
  await wait(2000);
  console.log("running");
  await wait(1000);
  console.log("ending");
}
run();
