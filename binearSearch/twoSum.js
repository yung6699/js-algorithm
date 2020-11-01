function solution (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let expected = target - numbers[i];
    let left = i;
    let right = numbers.length - 1;

    while(left <= right) {
      let mid = left + (right - left);
      if (numbers[mid] < expected) left = mid + 1;
      if (numbers[mid] > expected) right = mid - 1;
      if (numbers[mid] === expected) return [i, mid]
    }
  }
}

console.log(solution([2,7,11,15], 9))
console.log(solution([2,3,4], 6))
