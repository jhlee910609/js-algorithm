function solution(arr) {
  let ans = 0;
  // x 방향
  let dx = [-1, 0, 1, 0];
  // y 방향
  let dy = [0, -1, 0, 1];
  let ch = Array.from({ length: arr.length }, () =>
    Array.from({ length: arr[0].length }, () => 0)
  );

  function dsf(x, y) {
    if (x < 0 || y < 0) return;
    if (x > arr.length - 1 || y > arr[0].length - 1) return;
    if (arr[x][y] === 1) return;

    if (x === arr.length - 1 && y === arr[0].length - 1) {
      console.log(ch);
      ans++;
    } else {
      for (let i = 0; i < dx.length; i++) {
        // 왔던 길 되돌아 가지 않도록 체크한다.
        if (ch[x][y] === 0) {
          ch[x][y] = 1;
          dsf(x + dx[i], y + dy[i]);
          ch[x][y] = 0;
        }
      }
    }
  }

  // 기본 시작 좌표로 돌린다.
  dsf(0, 0);
  console.log(ans);
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
