function solution (target) {
  const dp = {};

  function fib(N) {
    if (N === 0 || N === 1) return N;
    if (dp[N]) return dp[N];
    dp[N] = fib(N - 1) + fib(N - 2);
    return dp[N]
  }

  return fib(target);
}

console.log(solution(7))
console.log(solution(6))
