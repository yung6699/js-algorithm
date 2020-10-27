function solution(numbers, target) {
  var answer = 0;
  const result = [];

  function dfs (idx, _sum) {
    const isEnd = idx === numbers.length;
    if (_sum === target && isEnd) {
      result.push(_sum);
      return;
    }

    if (idx === numbers.length) return;

    dfs(idx + 1, _sum + numbers[idx]);
    dfs(idx + 1, _sum - numbers[idx]);
  }

  dfs(0, 0)

  return result.length;
}
