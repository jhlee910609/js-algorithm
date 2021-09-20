function solution(input) {
  const answer = [];
  for (let i = 0; i < input.length; i++) {
    let temp = Math.floor(input[i] / 10) * 10;

    if (input[i] % 10 > 5) {
      temp += 10;
    } else {
      temp += 5;
    }

    console.log(temp - input[i]);
  }
  return answer;
}

console.log(solution([73, 67, 38, 33]));
