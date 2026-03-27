function reversePrefix(word, ch) {
  let arr = word.split("");
  let left = 0;
  let right = Math.min(k - 1, word.length - 1);
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr.join("");
}
let word = "abcdefd";
let k = 3;
console.log(reversePrefix(word, k));
