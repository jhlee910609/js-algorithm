function solution(num) {
  DFS(num);

  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
}

console.log(solution(20));
