function solution(jobs) {
  let answer = 0;
  let idx = 0;
  let time = 0;
  const priorityQueue = [];
  jobs.sort((a, b) => a[0] - b[0]);

  while (idx < jobs.length || priorityQueue.length !== 0) {

    if (jobs.length > idx && time >= jobs[idx][0]) {
      priorityQueue.push(jobs[idx]);
      priorityQueue.sort((a, b) => a[1] - b[1]);
      idx += 1;
      continue;
    }

    if (priorityQueue.length !== 0) {
      time += priorityQueue[0][1];
      answer += time - priorityQueue[0][0];
      priorityQueue.shift();
      continue
    }

    time = jobs[idx][0];
  }
  return Math.floor(answer / jobs.length);
}

console.log(solution([[0, 3], [1, 9], [2, 6]]));

