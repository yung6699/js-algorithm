function findItinerary () {
  const graph = [ null, [2, 3], [4, 5], [], [], [] ];

  const route = [];

  function dfs (start) {
    while(graph[start].length) {
      dfs(graph[start].shift())
    }
    route.push(start);
  }

  dfs(1);
  return route.reverse();
}

console.log(findItinerary());


