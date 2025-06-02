let rows = 5;

for (let i = 1; i <= rows; i++) {
  let str = "";
  for (let j = 0; j <= rows - 1 - i; j++) {
    str += " ";
  }
  for (let k = 0; k < i; k++) {
    str += "* ";
  }
  console.log(str);
}
