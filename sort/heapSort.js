let arrLen = null;

function swap (input, i, j) {
  let temp = input[i];
  input[i] = input[j];
  input[j] = temp;
}

function heapRoot (input, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let max = i;

  if (left < arrLen && input[left] > input[max]) max = left;
  if (right < arrLen && input[right] > input[max]) max = right;

  if (max !== i) {
    swap(input, i, max);
    heapRoot(input, max);
  }
}

function heapSort(input) {
  arrLen = input.length;

  for (let i = Math.floor(arrLen / 2); i >= 0; i--) {
    heapRoot(input, i);
  }

  for (let i = input.length - 1; i > 0; i--) {
    swap(input, 0, i);
    arrLen--;

    heapRoot(input, 0);
  }
}

let nums = [1, 3, 5, 6, 2, 0, 8, 9, 7, 4];
heapSort(nums); // 힙 정렬 시행
console.log(nums);
