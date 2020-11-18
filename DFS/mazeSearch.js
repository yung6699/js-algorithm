function solution (row, col, maze) {
  maze = maze.map(item => item.split(''));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function dfs (i, j, step) {
    if (i < 0 || j < 0) return;
    if (i >= row || j >= col) return;
    if (maze[i][j] !== '1') return;
    maze[i][j] = '#' + step;

    for (let z = 0; z < dx.length; z++) {
      dfs(i + dx[z], j + dy[z], step + 1);
    }
  }

  dfs(0, 0, 1);
  return maze[row -1][col -1].replace(/#/, '');
}

const maze = [
  '1011111',
  '1110001',
  '1000001',
  '1000001',
  '1000001',
  '1000001',
  '1111111'
];

console.log(solution(7, 7, maze));

