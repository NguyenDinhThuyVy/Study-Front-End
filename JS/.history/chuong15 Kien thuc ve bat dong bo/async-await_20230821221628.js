function wait(timer = 0) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, timer);
  });
}
