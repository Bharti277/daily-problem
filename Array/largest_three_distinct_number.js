// Largest three distinct elements in an array

let arr = [4, 34, 56, 12, 10, 30, 89, 89, 110, 110, 76];

function largestThreeNumber() {
  let first_num = -Infinity;
  let second_num = -Infinity;
  let third_num = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first_num) {
      third_num = second_num;
      second_num = first_num;
      first_num = arr[i];
    } else if (arr[i] > second_num && arr[i] != first_num) {
      third_num = second_num;
      second_num = arr[i];
    } else if (
      arr[i] > third_num &&
      arr[i] != first_num &&
      arr[i] != second_num
    ) {
      third_num = arr[i];
    }
  }
  let result = [];
  if (first_num != -Infinity) result.push(first_num);
  if (second_num != -Infinity) result.push(second_num);
  if (third_num != -Infinity) result.push(third_num);
  return result;
}

largestThreeNumber();
