// Find Largest element in an Array

let arr = [50, 67, 34, 74, 28, 90, 10, 5, 67, 34];
function largestElement() {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(largestElement());
