let arr = [4, 34, 56, 12, 10, 30, 89, 89, 110, 110, 76];

function secondLargestNumber() {
  let largest_num = -1;
  let second_num = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest_num) {
      second_num = largest_num;
      largest_num = arr[i];
    } else if (arr[i] > second_num && arr[i] != largest_num) {
      second_num = arr[i];
    }
  }
  return second_num;
}

secondLargestNumber();
