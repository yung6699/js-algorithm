function solution (height) {

  if (!height.length) return 0;

  let volume = 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];

  while (left < right) {
    leftMax = Math.max(height[left], leftMax);
    rightMax = Math.max(height[right], rightMax);

    if (leftMax <= rightMax) {
      volume += leftMax - height[left];
      left += 1;
    } else {
      volume += rightMax - height[right];
      right -= 1;
    }
  }

  return volume;
}
