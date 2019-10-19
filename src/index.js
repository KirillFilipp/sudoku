module.exports = function solveSudoku(matrix) {

  const transmatrix = matrix;
  for (let row = 0; row < 9; row++) {
    for (let column = 0; column < 9; column++) {
      if (matrix[row][column] === 0) {
        const suggestions = count(row, column, transmatrix);

        for (let suggestion of suggestions) {
          transmatrix[row][column] = suggestion;
          solveSudoku(transmatrix);
        }
      }
    }
  }
  return transmatrix;


  function count(row, column, matrix) {
    const suggestions = [];
    row = help(row) * 3;
    column = help(column) * 3;
    for (let i = 0; i < 9; i++) {
      suggestions.push([matrix[row][i], matrix[i][column], matrix[row + i % 3][column + help(i)]]);
    }
    return suggestions;
  }

  function help(num) {
    return Math.floor(num / 3);
  }
}
