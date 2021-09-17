function solution(inputArray) {
  let answer = 0;
  const M = inputArray.length;
  const N = inputArray[0].length;
  // i = 멘토, j = 멘티
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      let cnt = 0;
      // input 모두 순회
      for (let k = 0; k < M; k++) {
        // 순회하면서 멘토, 멘티 등수
        let pi = (pj = 0);
        for (let l = 0; l < N; l++) {
          // 멘토 등수
          if (inputArray[k][l] === i) {
            pi = l;
          }

          // 멘티 등수
          if (inputArray[k][l] === j) {
            pj = l;
          }
        }
        // 멘토 > 멘티 순서 cnt++
        if (pi < pj) {
          cnt++;
        }
      }
      // 모든 시험에서 멘토 > 멘티 answer++
      if (cnt === M) answer++;
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
