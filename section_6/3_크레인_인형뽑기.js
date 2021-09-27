function solution(board, moves) {
  let answer = 0; // 개수
  const len = board.length;
  const stack = []; // 스택

  // 크레인 움직인다.
  loop: for (const x of moves) {
    // 보드 계속 돈다
    console.log("x ===", x);
    for (let i = 0; i < len; i++) {
      const doll = board[i][x - 1];
      console.log(doll);
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  ) === 4
);
