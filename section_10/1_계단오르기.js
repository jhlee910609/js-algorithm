/**
 * 동적 계획법은 한 방법으로 문제를 풀 수 없음
 */
function solution(n) {
  let dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }
  return dy[n];
}

console.log(solution(7) === 21);
