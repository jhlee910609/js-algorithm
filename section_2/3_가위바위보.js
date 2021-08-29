// 1 가위 2 바위 3 보
function solution(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    if (a === b) answer += "D";
    else if (a === 1 && b === 3) answer += "B";
    else if (a > b) answer += "A";
    else answer += "B";
  }

  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
