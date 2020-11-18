function combinationsSum (candidates, target) {
  const results = [];

  function dfs (csum, idx, elements) {
    if (csum < 0 ) return;

    if (csum === 0 ) {
      results.push(elements);
      return;
    }

    for (let i = idx; i < candidates.length; i++) {
      dfs(csum - candidates[i], i, [...elements, candidates[i]])
    }
  }

  dfs(target, 0, [])

  return results;
}

console.log(combinationsSum([ 2, 3, 6, 7], 7))
// console.log(combinationsSum([1,0,-1,0,-2,2], 0))
