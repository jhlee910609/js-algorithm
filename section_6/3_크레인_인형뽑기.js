function solution(board, moves) {
  let answer = 0; // 개수
  const stack = []; // 스택

  // 크레인 움직인다.
  for (const x of moves) {
    // 보드 계속 돈다
    console.log("x ==== ", x);
    let cur = 0;
    while (board[cur][x - 1] === 0 && cur < board[0].length) {
      if (board[cur][x - 1] === stack[stack.length - 1]) {
        stack.pop();
        answer++;
      } else {
        stack.push(board[cur][x - 1]);
      }
      board[cur][x - 1] = 0;
      cur++;
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
