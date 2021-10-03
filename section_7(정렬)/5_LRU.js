function solution(S, tasks) {
  const cache = [];

  const rearrange = (targetIdx) => {};

  tasks.forEach((task) => {
    const targetIdx = cache.findIndex((x) => task === x);
    const idx = targetIdx > -1 ? targetIdx : cache.length - 1;

    for (let i = 0; i < idx; i++) {
      cache[i + 1] = cache[i];
    }
  });

  return cache;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
console.log(7, 5, 3, 2, 6);
