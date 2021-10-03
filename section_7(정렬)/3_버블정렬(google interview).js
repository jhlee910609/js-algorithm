function solution(input) {
  // 뒤에서부터 max 수 정해서 돈다.
  for (let i = input.length - 1; i > 0; i--) {
    // i 큰 수
    for (let j = 0; j < i; j++) {
      if (input[i] < input[j]) {
        [input[i], input[j]] = [input[j], input[i]];
      }
    }
  }
  return input;
}

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));
