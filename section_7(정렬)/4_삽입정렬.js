function solution(input) {
  for (let i = 0; i < input.length; i++) {
    let temp = input[i],
      j;

    for (j = i - 1; j >= 0; j--) {
      if (input[j] > temp) {
        input[j + 1] = input[j];
      } else {
        break;
      }
    }
    input[j + 1] = temp;
  }
  return input;
}

const result = [13, 5, 345, 5, 38, 854, 243, 1, 42, 67].sort((a, b) => a - b);
console.log(solution([13, 5, 345, 5, 38, 854, 243, 1, 42, 67]));
console.log(result);
