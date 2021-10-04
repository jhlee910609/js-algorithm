function solution(S, tasks) {
  const cache = Array.from({ length: S }).map((v, i) => 0);
  tasks.forEach((task) => {
    const cachedIdx = cache.indexOf(task);
    const len = cachedIdx > -1 ? cachedIdx : cache.length - 1;

    for (let i = len; i > 0; i--) {
      cache[i] = cache[i - 1];
    }
    cache[0] = task;
  });
  return cache;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
console.log(7, 5, 3, 2, 6);
