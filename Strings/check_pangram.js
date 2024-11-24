// Check if given String is Pangram or not

let str = "he quick brown fox jumps over the lazy dog";
function checkPangram() {
  let lowerCaseString = str.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let letter of alphabet) {
    if (!lowerCaseString.includes(letter)) {
      return false;
    }
  }
  return true;
}

checkPangram();
