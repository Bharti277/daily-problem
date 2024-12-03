// Print all the duplicate characters in a string

// First Method
let str = "geeksforgeekss";

function printDuplicate() {
  let charCount = {};
  let duplicates = [];
  for (let ch of str) {
    charCount[ch] = (charCount[ch] || 0) + 1;
  }
  for (let ch in charCount) {
    if (charCount[ch] > 1) {
      duplicates.push(ch);
    }
  }
  return duplicates;
}
printDuplicate();

// second method

function printAllDuplicate() {
  str = str.split("").sort().join("");
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (i < str.length - 1 && str[i] === str[i + 1]) {
      i++;
      count++;
    }
    if (count > 1) {
      console.log(str[i] + "count" + count);
    }
  }
}
printAllDuplicate();
