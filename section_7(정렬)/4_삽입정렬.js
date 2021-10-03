function solution(input) {
  for (let i = 0; i < input.length; i++) {
    // 1. 옮겨야할 원소 및 옮길 idx 초기화
    let temp = input[i],
      j;

    // i바로 앞 idx부터 루프 시작
    for (j = i - 1; j >= 0; j--) {
      if (input[j] > temp) {
        // input 덮는 건 무시해도 된다.
        input[j + 1] = input[j];
      } else {
        console.log("11", input);
        break;
      }
    }
    // 사실상 비어 있는 공간
    input[j + 1] = temp;
  }
  return input;
}

const result = [13, 5, 345, 5, 38, 854, 243, 1, 42, 67].sort((a, b) => a - b);
console.log(solution([13, 5, 345, 5, 38, 854, 243, 1, 42, 67]));
console.log(result);
