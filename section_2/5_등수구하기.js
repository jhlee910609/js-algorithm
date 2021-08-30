// 나포함 앞에 몇 명이 있냐
function solution(arr) {
  const answer = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    answer[i] = 1;

    for (let j = i; j < len; j++) {
      if (arr[j] > arr[i]) {
        answer[i]++;
      }
    }
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
