function solution (grid) {
  let count = 0;

  function dfs (graph, i, j) {
    if (i < 0 || j < 0 || i >= graph.length || j >= graph[0].length) return;
    if (graph[i][j] !== '1') return;

    graph[i][j] = '#';
    dfs(graph, i + 1, j);
    dfs(graph, i - 1, j);
    dfs(graph, i, j + 1);
    dfs(graph, i, j - 1);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j);
        count += 1;
      }
    }
  }

  return count;
}
