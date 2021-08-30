/**
 * N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
 * 
▣ 입력설명
첫 줄에 N(3<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력 된다. 같은 점수가 입력될 경우 높은 등수로 동일 처리한다. 즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.

▣ 출력설명
입력된 순서대로 등수를 출력한다.
 */
// 나 포함 앞에 몇 명의 높은 점수의 사람이 있느냐
function solution(arr) {
  const answer = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    answer[i] = 1;

    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[i]) {
        answer[i]++;
      }
    }
  }
  return answer;
}

let arr = [87, 89, 100, 100, 76];
console.log(solution(arr));
