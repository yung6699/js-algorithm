function productExceptSelf(nums) {
  const out = [];
  let p = 1;

  for (let idx = 0; idx < nums.length; idx++) {
    out.push(p);
    p = p * nums[idx];
  }

  p = 1;

  for (let idx = nums.length - 1; idx >= 0; idx--) {
    out[idx] = out[idx] * p;
    p = p * nums[idx];
  }

  return out;
}

console.log(productExceptSelf([1, 2, 3, 4]))
