/**
 * 냅색 알고리즘
 * 1. 주어진 제한조건을 dynamic table로 표현한다.
 * 1.1. dynamic table은 더 나은 값으로 갱신한다.
 */
function solution(arr, m) {
  const dy = Array.from({ length: arr.length + 1 }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    let ps = arr[i][0]; // 점수
    let pt = arr[i][1]; // 소요 시간
    // 중복을 피하기 위해 뒤에서부터 돈다.
    // for문 앞에서부터 순서대로 돌면 중복이 생긴다.
    for (let j = m; j >= pt; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
  }

  console.log(dy);
  return dy[m];
}

console.log(
  solution(
    [
      [10, 5],
      [25, 12],
      [15, 8],
      [6, 3],
      [7, 4],
    ],
    20
  ) === 41
);
