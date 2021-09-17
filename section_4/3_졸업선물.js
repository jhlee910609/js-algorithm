// 뭔가를 구하려고 하는데 기준이 명확하지 않다? 모든 조건에 대해 다 찾아야 한다. > brute force
function solution(input, budget) {
  let answer = 0;
  // 1.
  input = input.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      console.log(input[i][j]);
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [6, 6],
      [2, 2],
      [4, 3],
      [4, 5],
      [10, 3],
    ],
    28
  )
);
