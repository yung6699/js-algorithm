function solution(matrix, target) {
  if (!matrix.length) return false;

  let row = 0;
  let col = matrix[0].length - 1;

  while (row <= matrix.length - 1 && col >= 0) {
    if (target === matrix[row][col]) return true;
    if (target < matrix[row][col]) col -= 1;
    if (target > matrix[row][col]) row += 1;
  }

  return false;
}
