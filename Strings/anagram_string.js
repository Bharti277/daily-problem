// Check if two Strings are Anagrams of each other or not

let str1 = "geeks";
let str2 = "kseeg";
function checkAnagram() {
  let newStr1 = str1.split("").sort().join("");
  let newStr2 = str2.split("").sort().join("");
  return newStr1 === newStr2;
}
checkAnagram();

// Using loop method
function checkAnagramStr() {
  const charCount = {};
  for (let ch of str1) {
    charCount[ch] = (charCount[ch] || 0) + 1;
  }
  for (let ch of str2) {
    charCount[ch] = (charCount[ch] || 0) - 1;
  }
  for (let key in charCount) {
    if (charCount[key] !== 0) {
      return false;
    }
  }
  return true;
}
checkAnagramStr();
