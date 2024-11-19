// Remove all occurrences of a character in a string

// Inbuilt method

let str = "geeksforgeeks";
let char = "e";

function removeAllOccuringMethod() {
  let newStr = str.split(char).join("");
  console.log(newStr);
}
removeAllOccuringMethod();

function removeAllOccuring() {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      result += str[i];
    }
  }
  return result;
}
removeAllOccuring();
