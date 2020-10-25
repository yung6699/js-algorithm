function topKFrequent(nums, k) {
  const count = {};
  nums.forEach(num => count[num] = (count[num] || 0) + 1);
  const temp = Object.entries(count).sort((a, b) => b[1] - a[1]);
  const test = temp.slice(0, k);
  const result = test.map((num) => num[0]);

  return result;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1, 2], 2));
console.log(topKFrequent([3,0,1,0], 1));
