function solution (T) {
  const answer = new Array(T.length).fill(0);
  const stack = [];

  for (let i = 0; i < T.length; i++) {
    const cur = T[i];
    while(stack.length && cur > T[stack[stack.length - 1]]) {
      const last = stack.pop();
      answer[last] = i - last;
    }
    stack.push(i);
  }
  return answer;
}

console.log(solution([73, 74, 75, 71, 69, 72, 76, 73]));
