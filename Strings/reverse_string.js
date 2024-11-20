// Reverse a String

let str = "geeksforgeek";

function reverseString() {
  for (let i = 0; i < str.length; i++) {
    result.push(str[str.length - 1 - i]);
  }
  return result.join("");
}
reverseString();

let inArrayConvert = str.split("");
let newStr = inArrayConvert.reverse().join("");
console.log(newStr);
