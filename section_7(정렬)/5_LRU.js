function solution(S, tasks) {
  const cache = Array.from({ length: S });

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const targetIdx = cache.indexOf(task);

    if (cache.length === S) {
      if (targetIdx > -1) {
        for (let j = 0; j < targetIdx; j++) {
          cache[j + 1] = cache[j];
        }
      } else {
        for (let j = 0; j < cache.length - 1; j++) {
          cache[j + 1] = cache[j];
        }
      }
      cache[0] = task;
    } else {
      if (targetIdx > -1) {
        for (let j = 0; j < targetIdx; j++) {
          cache[j + 1] = cache[j];
        }
        cache[0] = task;
      } else {
        cache.unshift(task);
      }
    }
  }

  return cache;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
console.log(7, 5, 3, 2, 6);
