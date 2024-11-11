// to find leaders in an array, you should traverse the array from right to left because a leader is defined as an element that is greater than all elements to its right.
let arr = [7, 10, 4, 10, 6, 5, 2];

function leadersInArray() {
  let leaders = [];
  let max = -Infinity;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
      leaders.push(arr[i]);
      max = arr[i];
    }
  }
  for (let i = 0; i < leaders.length / 2; i++) {
    let temp = leaders[i];
    leaders[i] = leaders[leaders.length - 1 - i];
    leaders[leaders.length - 1 - i] = temp;
  }
  return leaders;
}
leadersInArray();
