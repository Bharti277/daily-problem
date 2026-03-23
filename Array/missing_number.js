let arr = [4, 0, 2, 1];

function findMissingNumber() {
  let result = [];
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let allNum = new Set(arr);
  for (let i = min; i <= max; i++) {
    if (!allNum.has(i)) {
      result.push(i);
    }
  }

  return result;
}

let a = findMissingNumber();
console.log(a);
// Time complexity: O(n)
// Space complexity: O(n)
