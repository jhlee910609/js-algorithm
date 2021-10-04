function solution(S, tasks) {
  const cache = Array.from({ length: S }).map((v, i) => 0);
  tasks.forEach((task) => {
    const cachedIdx = cache.indexOf(task); // hit or miss
    const len = cachedIdx > -1 ? cachedIdx : cache.length - 1;

    for (let i = len; i > 0; i--) {
      cache[i] = cache[i - 1];
    }
    cache[0] = task;
  });
  return cache;
}

// 내장함수 사용
function solution2(S, tasks) {
  const cache = Array.from({ length: S }).map((v, i) => 0);
  tasks.forEach((task) => {
    const cachedIdx = cache.indexOf(task); // hit or miss

    // miss
    if (cachedIdx < 0) {
      cache.unshift(task);
      if (cache.length > S) {
        cache.pop();
      }
    } else {
      // hit
      // 기존 cache 되어 있는 원소 삭제
      cache.splice(cachedIdx, 1);
      cache.unshift(task);
    }
  });
  return cache;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
console.log(solution2(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
console.log(7, 5, 3, 2, 6);
