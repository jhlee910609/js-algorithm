function solution(input, M) {
  let answer = 0;
  for (let i = 0; i < input.length; i++) {
    let sum = input[i];
    let res = [input[i]];
    for (let j = i + 1; j < input.length; j++) {
      if (sum === M) {
        answer++;
        console.log("res", res);
        res = [];
        break;
      } else if (sum < M) {
        sum += input[j];
        res.push(input[j]);
      } else {
        res = [];
        break;
      }
    }
  }
  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 5));
