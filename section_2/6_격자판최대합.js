function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  // 가로 합
  let garoSum = 0;
  let seroSum = 0;
  for (let i = 0; i < arr.length; i++) {
    garoSum = 0;
    seroSum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      garoSum += arr[i][j];
      seroSum += arr[j][i];
    }
    answer = Math.max(garoSum, seroSum);
    garoSum = 0;
    seroSum = 0;
  }
  console.log(answer);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
