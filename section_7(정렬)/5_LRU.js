function solution(S, tasks) {
  const cache = [];

  tasks.forEach((task) => {
    console.log("task", task);
    const targetIdx = cache.findIndex((x) => task === x);

    if (targetIdx !== -1) {
      console.log("targetIdx", targetIdx);
      const temp = cache[targetIdx];

      for (let j = 0; j < targetIdx; j++) {
        cache[j + 1] = cache[j];
      }

      cache[0] = temp;
      console.log(cache);
    } else {
      if (task.size >= S) {
        cache.pop();
      }
      cache.unshift(task);
    }
  });
  return cache;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
console.log(7, 5, 3, 2, 6);
