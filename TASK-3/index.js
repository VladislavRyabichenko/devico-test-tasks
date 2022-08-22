const bar = (n) => {
  const [rows, cols] = [n, n];
  const matrix = Array(rows).fill(Array(cols).fill(0));

  let res = matrix.map((row, rowIdx) => {
    return row.map((colVal, colIdx) => {
      if (rowIdx === colIdx || rowIdx === cols - colIdx - 1) return 2;
      if (rowIdx < colIdx && rowIdx < n - 1 - colIdx) return 1;
      if (rowIdx > colIdx && rowIdx > n - 1 - colIdx) return 1;
      else return colVal;
    });
  });
  // Uncomment for better log
  // res.forEach((row) => console.log(row))
  return res;
};

console.log(bar(5));

console.log(bar(4));
