var maxSlidingWindow = function(nums, k) {
  const initNum = -Infinity;
  const results = [];
  const queue = [];
  let maxNumber = initNum;

  for (let i = 0; i < nums.length; i++) {
    queue.push(nums[i]);
    if (i < k - 1) continue;

    if (maxNumber === initNum) maxNumber = Math.max(...queue);
    else if (nums[i] > maxNumber) maxNumber = nums[i];
    results.push(maxNumber);

    const firstElement = queue.shift();
    if (maxNumber === firstElement) maxNumber = initNum;

  }

  return results;
}
