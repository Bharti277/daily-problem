// There is given unarranged strings with brackets.
// [{(])}

function arrangeBrackets(str) {
  const stack = [];
  const bracketPair = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (let char of str) {
    if (bracketPair[char]) {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (bracketPair[last] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// Example usage
const testStr = "[{()}]";
console.log(arrangeBrackets(testStr));
