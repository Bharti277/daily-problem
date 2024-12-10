// Array Reverse method

let arr = [1, 4, 3, 2, 6, 5];

function reverseArray() {
  return arr.reverse();
}
reverseArray();

// Reverse Array by using loop addition
function reverseArrayLoop() {
  let temp = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    temp.push(arr[i]);
  }
  return temp;
}
reverseArrayLoop();
