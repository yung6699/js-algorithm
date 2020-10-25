/*
*  조합 문제
* */
function combination (list) {
  const results = [];

  function dfs (elements, start, k) {
    if (k === 0) results.push([ ...elements ]);
    for (let i = start; i < list.length; i++) {
      const _elements = [ ...elements, list[i]];
      dfs(_elements, i + 1, k - 1);
    }
  }

  for (let k = 0; k <= list.length; k++) {
    dfs([], 0, k);
  }

  return results;
}

console.log(combination([1, 2, 3, 4]))
