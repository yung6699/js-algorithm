function solution (G, start) {

  function dfs (v, discovered) {
    discovered.push(v);
    for (const vertex of G[v]) {
      if (discovered.includes(vertex)) continue;
      dfs(vertex, discovered);
    }
    return discovered
  }

  return dfs(start, []);
}


function solution2(G, startV) {
  const discovered = [];
  const stack = [ startV ];

  while(stack.length) {
    const v = stack.pop();
    if (!discovered.includes(v)) {
      discovered.push(v);
      for (let vertex of graph[v]) {
        stack.push(vertex);
      }
    }
  }
  return discovered;
}

const graph = {
  1: [2, 3, 4],
  2: [5],
  3: [5],
  4: [],
  5: [6, 7],
  6: [],
  7: [3]
};

console.log(solution(graph, 1));
console.log(solution2(graph, 1));
