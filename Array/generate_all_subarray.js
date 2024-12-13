// Generate all Subarray

let arr = [0, 1, 2, 3, 4];
let n = arr.length;

function generateAllSubarray() {
  let sub_arrays = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      let sub_array = [];
      for (let k = i; k <= j + i; k++) {
        sub_array.push(arr[k]);
      }
      sub_arrays.push(sub_array);
    }
  }
  return sub_arrays;
}

generateAllSubarray();
