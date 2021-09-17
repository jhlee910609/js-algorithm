function solution(inputArray) {
  let answer = 0;
  const M = inputArray.length;
  const N = inputArray[0].length;
  // i = 멘토, j = 멘티
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      let cnt = 0;
      for (let k = 0; k < M; k++) {
        let pi = (pj = 0);
        for (let l = 0; l < N; l++) {
          if (inputArray[k][l] === i) {
            pi = l;
          }

          if (inputArray[k][l] === j) {
            pj = l;
          }
          if (pi < pj) {
            cnt++;
          }
        }
        if (cnt === M) answer++;
      }
    }
  }
  return answer;
}

const testResult = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(testResult));
