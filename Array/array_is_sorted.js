// Check if array is sorted

let arr = [95, 10, 5, 56, 78, 85, 34];
// let arr = [10, 50, 56, 78, 85, 340];

function isArraySorted() {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

isArraySorted();
