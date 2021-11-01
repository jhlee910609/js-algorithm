// todo 복숩하기
// 앞으로 한번 돌고, 뒤로 한번 돌고
// 어느 기준으로 앞/뒤로 iteration 돌아야할 것 같은 경우
// 걍 앞으로 한번 구하고, 뒤로 오면서 한번 더 구함
function solution(input, target) {
  const len = input.length;
  let answer = "";
  for (let i = 0; i < len; i++) {
    if (input[i] === target) answer += "0";
  }
}

console.log(solution("teachermode", "e"));
