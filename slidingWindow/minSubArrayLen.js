function minSubArrayLen(arr, target) {
  let minLength = Infinity
  let sum = 0
  let left = 0
  let right = 0
  while (left < arr.length) {
    if (sum >= target) {
      minLength = Math.min(minLength, (right - left))
      sum -= arr[left]
      left++
    } else if (sum < target && right < arr.length) {
      sum += arr[right]
      right++
    } else {
      break
    }
  }
  return minLength === Infinity ? 0 : minLength
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 -> [4, 3] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 8, 62, 18, 9], 52))  // 1 -> [62] is the smallest subarray
console.log(minSubArrayLen([1, 4, 16, 22, 5], 95)) // 0
