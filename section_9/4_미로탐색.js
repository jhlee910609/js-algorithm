function solution(board) {
  let ans = 0;
  // x 방향
  let dx = [-1, 0, 1, 0];
  // y 방향
  let dy = [0, 1, 0, -1];

  const xLen = board.length - 1;
  const yLen = board[0].length - 1;

  function dsf(x, y) {
    if (x === xLen && y === yLen) {
      ans++;
    } else {
      for (let i = 0; i < dx.length; i++) {
        // 왔던 길 되돌아 가지 않도록 체크한다.
        let nx = x + dx[i];
        let ny = y + dy[i];

        // 1. 경계를 벗어 났을 때에 대한 예외처리
        // 2. 벽에 대한 예외처리 (벽이 아닐 때)

        if (
          nx >= 0 &&
          nx <= xLen &&
          ny >= 0 &&
          ny <= yLen &&
          board[nx][ny] === 0
        ) {
          // * 별도의 visited 배열 필요 없다.
          // 어차피 벽이 아닐 때만 아래 함수가 실행된다.
          // 방문 표시 한다.
          board[nx][ny] = 1;
          dsf(nx, ny);
          // 방문 표시 해제.
          // 방문 표시 안하면 무한으로 제자리 뺑뺑 돌게 된다.
          board[nx][ny] = 0;
        }
      }
    }
  }

  // 기본 시작 좌표로 돌린다.
  board[0][0] = 1;
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
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr) === 8);
