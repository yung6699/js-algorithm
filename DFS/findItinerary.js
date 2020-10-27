function findItinerary (tickets) {
  const graph = {};
  const route = [];
  tickets.forEach(ticket => {
    const [ from, to ] = ticket;
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
    graph[from].sort();
  });

  function dfs (start) {
    while(graph[start] && graph[start].length) {
      dfs(graph[start].shift())
    }
    route.push(start);
  }

  dfs('JFK');
  return route.reverse();
}

// findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]])
const list = [["JFK","ATL"],["JFK","SFO"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];
console.log(findItinerary(list));
console.log(findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]))
