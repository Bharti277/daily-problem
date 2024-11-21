// Program to print all substrings of a given string

let str = "abc";
function generateAllSubstring() {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let substringEle = "";
    for (let j = i; j < str.length; j++) {
      substringEle += str[j];
      result.push(substringEle);
    }
  }
  return result;
}

generateAllSubstring();

// Using method

function allSubstring() {
  if (str === "") return;
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.substring(i, j));
    }
  }
  return result;
}
allSubstring();
