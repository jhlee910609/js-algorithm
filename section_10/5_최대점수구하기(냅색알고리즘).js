/**
 * 냅색 알고리즘
 * 1. 주어진 제한조건을 dynamic table로 표현한다.
 * 1.1. dynamic table은 더 나은 값으로 갱신한다.
 */
function solution(q) {
  console.log(q);
  const dy = Array.from({ length: q.length + 1 }, () => 0);
}

console.log(
  solution([
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ]) === 41
);
