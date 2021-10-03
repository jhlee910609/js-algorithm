function solution(S, tasks) {
  const cache = [];

  tasks.forEach((task) => {
    console.log("task", task);
    const targetIdx = cache.findIndex((x) => task === x);
    console.log("targetIdx", targetIdx);

    if (targetIdx !== -1) {
      const temp = cache[targetIdx];

      for (let j = 0; j < targetIdx; j++) {
        cache[j + 1] = cache[j];
      }

      cache[0] = temp;
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
