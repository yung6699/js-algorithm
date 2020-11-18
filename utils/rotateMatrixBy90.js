function solution (arr) {
  const rowLength = arr.length;
  const columnLength = arr[0].length;
  const result = [];

  for (let i = 0; i < columnLength; i++) {
    result.push(new Array(rowLength).fill(0))
  }

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      result[j][rowLength - 1 - i] = arr[i][j];
    }
  }

  return result;
}

const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

console.log(solution(arr))



// print(rotate_a_matrix_by_90_degree(a))
