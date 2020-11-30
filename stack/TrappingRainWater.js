function solution (height) {
  const stack = [];
  let volume = 0;

  for (let i = 0; i < height.length; i++) {
    while (stack && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop();
      if (!stack.length) break;
      const distance = i - stack[stack.length - 1] - 1;
      const waters = Math.min(height[i], height[stack[stack.length - 1]]) - height[top];
      volume += distance * waters;
    }
    stack.push(i);
  }

  return volume;
}

console.log(solution([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
