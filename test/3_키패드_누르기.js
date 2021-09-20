// https://programmers.co.kr/learn/courses/30/lessons/67256
// 이 문제는 거리구하는 방법이 핵심인데
// 미리 좌표를 지정해두고, 계산해서 사용하는 방법이 가장 수월할듯하다
function solution(numbers, hand) {
  let answer = "";
  let cl = "*";
  let cr = "#";

  const left = [1, 4, 7];
  const right = [3, 6, 9];
  const center = [2, 5, 8, 0];

  for (let i = 0; i < numbers.length; i++) {
    if (left.includes(numbers[i])) {
      answer += "L";
      cl = numbers[i];
    } else if (right.includes(numbers[i])) {
      answer += "R";
      cr = numbers[i];
    } else {
      answer += "F";
    }
  }
  console.log(answer);
  return answer;
}

console.log(
  solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right") === "LRLLLRLLRRL"
);
