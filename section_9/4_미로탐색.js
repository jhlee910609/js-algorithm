function solution(arr) {
  let ans = 0;
  // x 방향
  let dx = [-1, 0, 1, 0];
  // y 방향
  let dy = [0, -1, 0, 1];

  function dsf(x, y) {
    if (x < 0 || y < 0) return;
    if (arr[x][y] === 1) return;

    if (x === 6 && y === 6) {
      ans++;
    } else {
      for (let i = 0; i < dx.length; i++) {
        console.log("x", x, "y", y);
        console.log("dx", dx[i], "dy", dy[i]);
        console.log("dx + x", x + dx[i], "dy + y", y + dy[i]);
        dsf(x + dx[i], y + dy[i]);
      }
    }
  }

  // 기본 시작 좌표로 돌린다.
  dsf(0, 0);
  return ans;
}

// 문제 좌표
// 1 벽, 0 통로
// 따라서 0만 지나갈 수 있다.
// (0,0) ~ (6, 6);
let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr) === 8);
