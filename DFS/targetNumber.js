function solution(numbers, target) {
  let answer = 0;

  function dfs (idx, sum) {
    if (numbers.length === idx) {
      if (sum === target) answer += 1;
      return;
    }

    const firstNum = numbers[idx];
    dfs(idx + 1, sum + (firstNum * 1))
    dfs(idx + 1, sum + (firstNum * -1))
  }

  dfs(0, 0)
  return answer;
}
