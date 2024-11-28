// Check if two Strings are Anagrams of each other

let str1 = "geeks";
let str2 = "kseeg";
function checkAnagram() {
  let newStr1 = str1.split("").sort().join("");
  let newStr2 = str2.split("").sort().join("");
  return newStr1 === newStr2;
}
checkAnagram();
