// Check if a given string is binary string or not

let str = "01010101010";

function checkBinaryString() {
  if (str === "") return;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "0" && str[i] !== "1") {
      return false;
    }
  }
  return true;
}
checkBinaryString();
