// Remove duplicate from sorted array

// let arr = [95, 10, 5, 56, 78, 85, 34, 95, 56, 5];
let arr = [10, 50, 50, 53, 56, 78, 85, 340];

function removeDuplicate() {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (i == 0 || arr[i] != arr[i - 1]) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

removeDuplicate();
