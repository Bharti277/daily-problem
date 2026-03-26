function differenceReverseNumber(num) {
  let rev = 0;
  let temp = num;
  while (temp > 0) {
    let digit = temp % 10;
    rev = rev * 10 + digit;
    temp = Math.floor(temp / 10);
  }
  return Math.abs(num - rev);
}
console.log(differenceReverseNumber(1234)); // 3087
console.log(differenceReverseNumber(4321)); // 3087
console.log(differenceReverseNumber(1111)); // 0
console.log(differenceReverseNumber(1000)); // 999
