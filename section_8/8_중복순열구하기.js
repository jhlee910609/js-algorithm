// 모든 순열 구함

function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    console.log(L, tmp);
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i; // tmp[0] = 1
        DFS(L + 1); // tmp[1] = 1
        // tmp[2] = 1
      }
    }
  }

  DFS(0);
  return answer;
}

console.log(solution(3, 2));
