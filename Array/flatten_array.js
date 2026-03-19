console.log(deepSum([1, [2, [3, 4]], 5])); // 15
console.log(deepSum([1, 2, [3, [4, [5]]]])); // 15
console.log(deepSum([])); // 0
console.log(deepSum([[[[2]]]])); // 2
console.log(deepSum([7])); // 7
console.log(deepSum([1, [2], [[3, 4]], 5])); // 15
console.log(deepSum([])); // 0
console.log(deepSum([0, [0, [0, [0]]]])); // 0

// function deepSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       sum += deepSum(arr[i]);
//     } else {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// Flatten an Array

function deepSum(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(deepSum(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
