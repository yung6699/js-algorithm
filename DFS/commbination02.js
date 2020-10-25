/*
*  조합 문제
* */
function combination (list) {
  const results = [];

  function dfs (idx, elements) {
    results.push(elements);
    for (let k = idx; k < list.length; k++) {
      dfs(k + 1, [...elements, list[k]]);
    }
  }

  dfs(0, []);
  return results;
}

console.log(combination([1, 2, 3, 4]))
