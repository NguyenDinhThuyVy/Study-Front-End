// 1 . Đảo ngược 1 chuỗi. Vd : " My name is zyzy"
// const ex1 = ["My name is zyzy"];
function reverseString(str) {
  if (!str) return null;
  else {
    // split("");
    const NewStr = str.split(" ");
    console.log(Newstr.reverse());
  }
}
reverseString("My name is zyzy");
