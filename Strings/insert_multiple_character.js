// How to insert characters in a string at a certain position?
// Approach is not yet correct
let str = "geeksforgeek";
let char = [1, 5, 7, 9];

function insertMultipleCharcter() {
  let result = "";
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (j > char.length && i == char[j]) {
      result += "*";
      j++;
    }
    result += str[i];
  }
  return result;
}
insertMultipleCharcter();
