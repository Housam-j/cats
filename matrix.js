const transpose = function(matrix) {
  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let temp = [];
      if (res[j]) {
        res[j].push(matrix[i][j]);
      } else {
        temp.push(matrix[i][j]);
      }
      res.push(temp);
    }
  }
  return (res);
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----');

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----');

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));
