function solution(board, moves) {
  console.log(board);
  let answer = 0;
  const stack = [];
  for (const x of moves) {
    console.log("x ====> ", x);
    for (let i = 0; i < board.length; i++) {
      const doll = board[i][x - 1];
      if (doll !== 0) {
        stack.push(doll);
        board[i][x - 1] = 0;
      }
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
