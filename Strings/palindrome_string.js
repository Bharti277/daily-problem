// Palindrome String

let str = "abac";
function checkPalindrome() {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[str.length - 1 - i]) return true;
  }
  return false;
}

checkPalindrome();
