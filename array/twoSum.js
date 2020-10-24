export function twoSum(nums, target) {
  let map = new Map(); // hash 문제일때 Map을 떠올려라.
  for (let i = 0; i < nums.length; i++) {
    const temp = target - nums[i];
    if (map.has(temp)) return [map.get(temp), i];
    map.set(nums[i], i);
  }
}
