// Check if one string is subsequence of other

let str1 = "AXY";
let str2 = "YADXCPY";

function subsequenceString() {
  let n = str1.length;
  let m = str2.length;
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (str1[i] === str2[j]) {
      i++;
    }
    j++;
  }
  return i === n;
}
subsequenceString();
