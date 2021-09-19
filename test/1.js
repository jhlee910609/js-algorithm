function solution(a) {
  let answer = "";
  const temp = String(a).split("").reverse();
  for (let i = 0; i < temp.length; i++) {
    if (i && i % 3 === 0) answer += ",";
    answer += temp[i];
  }
  return answer.reverse().join("");
}

// 123123555
// 123,123,555

console.log(solution(1231238099555));
