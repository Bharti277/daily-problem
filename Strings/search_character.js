// Program to Search a Character in a String

let s = "geeksforgeeks";
let ch = "k";

function findCharacter() {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "k") {
      return i;
    }
  }
  return -1;
}

findCharacter();
