// 선택정렬로 풀기
function solution(input) {
  for (let i = 0; i < input.length; i++) {
    // 최소 idx
    let min = i;

    for (let j = i; j < input.length; j++) {
      if (input[min] > input[j]) min = j;
    }

    const temp = input[i];
    input[i] = input[min];
    input[min] = temp;
  }
  return input;
}

const result = [13, 5, 345, 5, 38, 854, 243, 1, 42, 67].sort((a, b) => a - b);
console.log(result);
console.log(solution([13, 5, 345, 5, 38, 854, 243, 1, 42, 67]));
