function solution(input) {
  for (let i = 1; i < input.length; i++) {
    let minIdx = i;
    console.log("=====", input[i]);
    for (let j = 0; j < i; j++) {
      console.log(input[j]);
      if (input[j] < input[minIdx]) {
        minIdx = j;
      }
    }
    [input[i], input[minIdx]] = [input[minIdx], input[i]];
  }
  return input;
}

const result = [13, 5, 345, 5, 38, 854, 243, 1, 42, 67].sort((a, b) => a - b);
console.log(solution([13, 5, 345, 5, 38, 854, 243, 1, 42, 67]));
console.log(result);
