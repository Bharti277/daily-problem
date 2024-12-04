// Largest element in an Array

let arr = [10, 50, 50, 650, 53, 56, 78, 85, 340];

function largestElement() {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
largestElement();
