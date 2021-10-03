function solution(S, tasks) {
  const cache = Array.from({ length: S });
  console.log("cache", cache);

  tasks.forEac((task, i) => {
    console.log("task", task);
    if (cache.includes(task)) {
    }
  });
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
console.log(7, 5, 3, 2, 6);
