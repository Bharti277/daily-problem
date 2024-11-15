// Check if two strings are same or not

let str1 = "hello";
let str2 = "World";

console.log(str1 === str2);
console.log(str1.toLowerCase() === str2.toLowerCase());

function sameString() {
  return str1.localeCompare(str2) === 0;
}
sameString();
