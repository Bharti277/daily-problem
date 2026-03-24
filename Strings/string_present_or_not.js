function ransomNote(ransomNote, magazine) {
  let map = {};
  for (let char of magazine) {
    map[char] = (map[char] || 0) + 1;
  }
  for (let char of ransomNote) {
    if (!map[char]) {
      return false;
    }
    map[char]--;
  }
  return true;
}

console.log(ransomNote("a", "b")); // false
console.log(ransomNote("aa", "ab")); // false
console.log(ransomNote("aa", "aab")); // true
