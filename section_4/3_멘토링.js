function solution(input) {
  let answer = [];
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = 0; j < input[i].length; j++) {
      const student = input[i][j];
      console.log("student >", student);
    }
  }

  return answer;
}

const question = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(question));
