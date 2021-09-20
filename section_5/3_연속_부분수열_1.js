// 기본 풀이
function solution(input, M) {
  let answer = 0;
  for (let i = 0; i < input.length; i++) {
    let sum = input[i];
    for (let j = i + 1; j < input.length; j++) {
      if (sum === M) {
        answer++;
        break;
      } else if (sum < M) {
        sum += input[j];
      } else {
        break;
      }
    }
  }
  return answer;
}

// Two Pointers Algorithm
function solution2(input, M) {
  let answer = 0;
  let sum = 0;
  let start = (end = 0);
  while (start < input.length && end < input.length) {
    sum;
  }
}

console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6));
