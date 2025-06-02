function starPyramidPattern(n) {
  for (let i = 1; i <= n; i++) {
    let rows = "";
    for (j = 1; j <= n - i; j++) {
      rows += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      rows += "*";
    }
    console.log(rows);
  }
}

starPyramidPattern(5);
