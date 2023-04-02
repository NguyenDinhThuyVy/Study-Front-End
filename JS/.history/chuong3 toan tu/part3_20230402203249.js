"4.5"; // 4.5 parseFloat
"4"; // 4 parseint
// Number(value)
console.log(Number(4.5)); // 4.5
console.log(Number(4)); // 4
console.log(Number("abacde")); // NaN
// NaN not a Number
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(false)); // 0
console.log(Number("")); // 0
console.log(Number(NaN)); // NaN
// falsy values
console.log(Number(true)); //1
// String(value)
console.log(String(4.5)); // "4.5"
console.log(String(null)); // "null"
console.log(String(undefined));
