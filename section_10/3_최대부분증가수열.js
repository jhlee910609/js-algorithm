function solution(input) {
  const temp = Array.from({ length: input.length }, () => 0);

  for (let i = 0; i < input.length; i++) {
    let maxLength = 0;
    for (let j = 0; j < i; j++) {
      if (input[j] < input[i]) {
        maxLength = Math.max(temp[j], maxLength);
      }
    }
    temp[i] = maxLength + 1;
  }

  return Math.max(...temp);
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]) === 4);
