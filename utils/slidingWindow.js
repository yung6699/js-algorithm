/*
*  list: 배열
*  k: 윈도우 크기
* */
function slidingWindow (list, k) {
  const queue = [];
  const result = [];
  for (let i = 0; i < list.length; i++) {
    queue.push(list[i]);
    if (queue.length < k) continue;
    result.push([...queue]);
    queue.shift();
  }
  return result;
}

console.log(slidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
