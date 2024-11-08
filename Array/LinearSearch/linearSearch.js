// Linear Search

let arr = [50, 67, 34, 74, 28, 90, 10, 5, 67, 34];

function linearSearch(x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}

linearSearch(10);
