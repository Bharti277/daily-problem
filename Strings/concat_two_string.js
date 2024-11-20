// Concatenation of Two Strings

let str = "geeksforgeek";
let str2 = "hello welcome";

let mainStr = str + str2;

function concatTwoString() {
  let result = str.concat(str2);
  return result;
}
concatTwoString();

// Using loop
function concatTwoStringLoop() {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i];
  }
  for (let j = 0; j < str2.length; j++) {
    result += str[j];
  }
  return result;
}
concatTwoStringLoop();
