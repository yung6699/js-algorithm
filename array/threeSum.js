/*
 * 배열을 입력 받아 합으로 0을 만들어라.
 * */

function treeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let idx = 0; idx < nums.length - 2; idx++) {
    let left = idx + 1;
    let right = nums.length - 1;

    if (idx > 0 && nums[idx] === nums[idx - 1]) continue;

    while (left < right) {
      const sum = nums[idx] + nums[left] + nums[right];
      /*  */
      if (sum < 0) left += 1;
      if (sum > 0) right -= 1;
      if (sum === 0) {
        const arr = [nums[idx], nums[left], nums[right]].sort((a, b) => a - b);
        result.push(arr);

        while (left < right && nums[left] === nums[left + 1]) left += 1;
        while (left < right && nums[right] === nums[right - 1]) right -= 1;
        left += 1;
        right -= 1;
      }
    }
  }

  return result;
}

console.log(treeSum([-4, -1, -1, 0, 1, 2]));
console.log(treeSum([0, 0, 0]));
console.log(treeSum([-1, 0, 1, 0]));
