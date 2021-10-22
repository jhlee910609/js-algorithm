function solution(n, arr) {
  let count = 0;
  const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  const ch = Array.from({ length: n + 1 }, () => 0);
  let path = [];

  // 1. 방향 그래프 만들어 둔다.
  // 무방향 그래프는 graph[b][a] = 1도 해줘야 한다
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }

  function DFS(v) {
    if (v === n) {
      count++;
      console.log(path);
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          path.push(i);
          DFS(i);
          ch[i] = 0;
          path.pop();
        }
      }
    }
  }

  path.push(1);
  ch[1] = 1;
  // 1부터 무조건 시작이니
  // index 1을 무조건 방문한 걸로 시작한다.
  DFS(1);
  return count;
}

const arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
