// Count of substrings that start and end with 1 in given Binary String

let str = "00100101";
function binarySubstring() {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1") {
      for (let j = i + 1; j < str.length; j++) {
        if (str[j] === "1") {
          result++;
        }
      }
    }
  }
  return result;
}

binarySubstring();
