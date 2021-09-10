// todo 복숩하기
function solution(input, target) {
  const len = input.length;
  let answer = "";
  for (let i = 0; i < len; i++) {
    if (input[i] === target) answer += "0";
  }
}

console.log(solution("teachermode", "e"));
