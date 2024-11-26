// Check if a string is substring of another

// Using in-built method
let str = "geeksforgeeks";
let pat = "eks";

let idx = str.indexOf(pat);
console.log(idx);

function checkSubstring() {
  let n = str.length;
  let m = pat.length;
  for (let i = 0; i < n - m; i++) {
    let j;
    for (j = 0; j < m; j++) {
      if (str[i + j] !== pat[j]) {
        break;
      }
    }
    if (j === m) {
      return i;
    }
  }
  return -1;
}
checkSubstring();
