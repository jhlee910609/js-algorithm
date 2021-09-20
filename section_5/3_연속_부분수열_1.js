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
// 무엇이 끝까지 돌아야 하나 => end
function solution2(input, M) {
  let answer = 0;
  let sum = 0;
  let start = 0;
  for (let end = 0; end < input.length; end++) {
    sum += input[end];
    if (sum === M) answer++;

    while (sum >= M) {
      sum -= input[start++];
      if (sum === M) answer++;
    }
  }

  return answer;
}

console.log(solution2([1, 2, 1, 3, 1, 1, 1, 2], 6));
