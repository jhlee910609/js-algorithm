// https://programmers.co.kr/learn/courses/30/lessons/81301
// 이 문제는 치환해야할 문자열이 정확히 주어지므로 간단하게 풀어봄
function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}

console.log(solution("1two3zero"));
