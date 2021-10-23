/**
 * 인접 행렬과 다른 점은 자기가 갈 수 있는 노드들을 배열로 들고 있는다.
 */
function solution(n, arr) {
  let count = 0;
  const graph = Array.from(Array(n + 1), () => []);
  const ch = Array.from({ length: n + 1 }, () => 0);
  const path = [];

  // 1. 방향 그래프 만들어 둔다.
  // 2. 갈 수 있는 노드를 배열로 만든다.
  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  function DFS(v) {
    if (v === n) {
      count++;
      console.log(path);
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        if (ch[graph[v][i]] === 0) {
          ch[graph[v][i]] = 1;
          path.push(graph[v][i]);
          DFS(graph[v][i]);
          ch[graph[v][i]] = 0;
          path.pop();
        }
      }
    }
  }
  ch[1] = 1;
  // 1부터 무조건 시작이니
  // index 1을 무조건 방문한 걸로 시작한다.
  path.push(1);
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
