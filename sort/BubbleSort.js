function bubbleSort(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[j] > list[j + 1]) {
        // 구조분해 할당으로 swap
        [list[j + 1], list[j]] = [list[j], list[j + 1]]
      }
    }
  }
  return list;
}

function bubbleSort02 (A) {
  for (let i = 1; i < A.length; i++) {
    for (let j = i; j > 0 && A[j] < A[j - 1]; j--) {
      [ A[j - 1], A[j] ] = [ A[j], A[j - 1] ];
    }
  }

  return A;
}


console.log(bubbleSort([6, 8, 3, 9, 10, 1, 2, 4, 7, 5]));
console.log(bubbleSort([5, 1, 7, 4, 6, 3, 2, 8]));

console.log(bubbleSort02([6, 8, 3, 9, 10, 1, 2, 4, 7, 5]));
console.log(bubbleSort02([5, 1, 7, 4, 6, 3, 2, 8]));
