function solution(board, moves) {
  let answer = 0; // 개수
  const stack = []; // 스택

  // 크레인 움직인다.
  // x는 target position
  for (const x of moves) {
    // 보드를  계속 돈다
    for (let i = 0; i < board.length; i++) {
      const doll = board[i][x - 1]; // 인형

      // 인형이 있을때,
      if (doll !== 0) {
        // 스택 마지막 인형과 같으면
        if (doll === stack[stack.length - 1]) {
          stack.pop(); // 마지막 것도 없애고
          answer += 2; // +2
        } else {
          // 아니면 push
          stack.push(doll);
        }
        board[i][x - 1] = 0;
        break; // 포문 멈춤
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
