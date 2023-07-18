function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const header = document.querySelector(".headers");
window.addEventListener("scroll", debounceFn(function (e) {
  const scrollY = window.pageYOffset;
  console.log(scrollY);
  if (scrollY >= 68) {
    header && header.classList.add("is-fixed");
    // if (header) {
    //   header.classList.add("is-fixed");
    // }
  } else {
    header && header.classList.remove("is-fixed");
  }
},50);
