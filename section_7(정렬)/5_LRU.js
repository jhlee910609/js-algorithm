function solution(S, tasks) {
  const cache = [];

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const targetIdx = cache.indexOf(task);
    console.log("============ task", task);
    console.log("before", cache);

    if (cache.length < S) {
      if (targetIdx > -1) {
        for (let j = 0; j < targetIdx; j++) {
          console.log(cache[j], cache[j + 1]);
          cache[j + 1] = cache[j];
        }
        cache[0] = task;
      } else {
        cache.unshift(task);
      }
    } else {
      if (targetIdx > -1) {
        for (let j = 0; j < targetIdx; j++) {
          cache[j + 1] = cache[j];
        }
        cache[0] = task;
      } else {
        for (let j = 0; j < S - 1; j++) {
          cache[j + 1] = cache[j];
        }
        cache.pop();
        cache.unshift(task);
      }
    }
    console.log("after", cache);
  }

  return cache;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
console.log(7, 5, 3, 2, 6);
