// 1. Viết 1 function kiểm tra value có phải object hay không
// typeof value === "object"
// {} , [] , null
function isObject(value) {
  if (typeof value === "object" && !Array.isArray(value) && value !== null) {
    return true;
  } else return false;
}
console.log(isObject({}));
