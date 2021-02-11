function solution(A) {
  let bestSum = -Infinity;
  let currentSum = 0;

  for (const num of A) {
    currentSum = Math.max(num, currentSum + num);
    bestSum = Math.max(bestSum, currentSum);
  }

  return bestSum;
}

console.log(solution([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(solution( [-1, -5, -2, -7]));
