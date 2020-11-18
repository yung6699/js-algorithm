/*
*  조합 문제
* */
function combination (list) {
  const results = [];

  function dfs (start, elements, k) {
    if (k === 0) results.push([ ...elements ]);
    for (let i = start; i < list.length; i++) {
      const _elements = [ ...elements, list[i]];
      dfs(i + 1, _elements, k - 1);
    }
  }

  dfs(0, [], 2);
  return results;
}

console.log(combination([1, 2, 3, 4]))
