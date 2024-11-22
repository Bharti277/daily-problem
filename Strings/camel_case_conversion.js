// Camel case of a given sentence

let str = "I got intern at geeksforgeeks";

function camelCaseConversion() {
  let words = str.trim().split(/\s+/);
  let camelCaseString = "";
  for (i = 0; i < words.length; i++) {
    if (i === 0) {
      camelCaseString += words[i].toLowerCase();
    } else {
      camelCaseString +=
        words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
  }
  return camelCaseString;
}
camelCaseConversion();
