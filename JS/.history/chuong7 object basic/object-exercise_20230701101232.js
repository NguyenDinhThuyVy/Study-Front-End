// 1. Viết 1 function kiểm tra value có phải object hay không
// typeof value === "object"
// {} , [] , null
function isObject(value) {
  if (typeof value === "object" && !Array.isArray(value) && value !== null) {
    return true;
  } else return false;
}
console.log(isObject(undefined));

// 2.{a: 1, b :2} -> [["a",1], ["b",1]]
 // check nếu ko phải object thì dừng
 if (!isObject(object)) return;
 // nếu là object thì xử lý
 // return Object.entries(object);
 // [a, b]
 // object[key]
 // const value = Object.keys(object).map((key) => [key, object[key]]);
 // return value;
 let result = [];
 for (let key in object) {
   // hasOwnProperty(key) -> nếu object chứa key trả về true ngược lại trả về false
   if (object.hasOwnProperty(key)) {
     result.push([key, object[key]]);
   }
 }
 return result;
}
console.log(objectToArray({ a: 1, b: 2 }));