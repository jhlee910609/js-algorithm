function solution(S, tasks) {
  const cache = [];

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const targetIdx = cache.indexOf(task);
    const startIdx = targetIdx > -1 ? targetIdx : S - 1;

    // 포인트 1. 뒤부터 돈다. 그래야 맨앞을 정상적으로 비울 수 있음
    // 빈자가 생겨야
    for (let j = startIdx; j >= 1; j--) {
      cache[j] = cache[j - 1];
    }
    cache[0] = task;
  }
  return cache;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
console.log(7, 5, 3, 2, 6);
