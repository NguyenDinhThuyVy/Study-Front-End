// 1 . Đảo ngược 1 chuỗi. Vd : " My name is zyzy"
// const ex1 = ["My name is zyzy"];
function reverseString(str) {
  if (!str) return null;
  else {
    // split("");
    str = str.split(" ");
    str = str.reverse();
  }
}
reverseString("My name is zyzy");
