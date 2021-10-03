function solution(input) {
  for (let i = 0; i < input.length; i++) {
    console.log("=====", input[i]);
    let minIdx = i;
    for (let j = i; j < input.length; j++) {
      if (input[j] < input[i]) {
        minIdx = j;
      }
    }
  }
  return input;
}

const result = [13, 5, 345, 5, 38, 854, 243, 1, 42, 67].sort((a, b) => a - b);
console.log(result);
console.log(solution([13, 5, 345, 5, 38, 854, 243, 1, 42, 67]));
