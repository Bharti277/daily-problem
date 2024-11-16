// Remove a Character from a Given Position

let s = "geeksforgeeks";
let pos = 4;

function removeACharacterString() {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (i !== pos) {
      result += s[i];
    }
  }
  return result;
}

removeACharacterString();

// 2nd Method

let str = "geeksforgeek";
let position = 6;

function removeCharc() {
  if (position < 0 || position > str.length) {
    return str;
  }
  let before = str.slice(0, position);
  let after = str.slice(position + 1);
  console.log(before + after);
}
