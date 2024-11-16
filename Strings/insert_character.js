// Insert a character in String at a Given Position

// by using inbuilt method
let str = "geeksforgeeks";
let char = "M";
let posit = 4;

function insertString() {
  let before = str.slice(0, posit);
  let after = str.slice(posit);
  let result = before + char + after;
  console.log(result);
}

insertString();

// Using loop

let s = "geeksforgeeks";
let ch = "M";
let pos = 4;

function insertString() {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (i === pos) {
      result += ch;
      console.log(result);
    }
    result += s[i];
  }
  return result;
}

insertString();
