// 버플정렬로 sort 문제 푼다
function solution(input) {
  // 가장 첫번째는 돌 필요 없다.
  for (let i = input.length - 1; i > 0; i--) {
    // i는 큰 수
    for (let j = 0; j < i; j++) {
      if (input[j] > input[i]) {
        [input[i], input[j]] = [input[j], input[i]];
      }
    }
  }
  return input;
}

const result = [13, 5, 345, 5, 38, 854, 243, 1, 42, 67].sort((a, b) => a - b);
console.log(result);
console.log(solution([13, 5, 345, 5, 38, 854, 243, 1, 42, 67]));
