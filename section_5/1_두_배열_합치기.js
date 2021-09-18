// 3
// 135
// 5
// 23679
function solution(a, b) {
  const answer = [];
  while (a.length > 0 || b.length > 0) {
    if (a[0] > b[0]) {
      answer.push(a.shift());
    } else {
      answer.push(b.shift());
    }
  }

  return answer;
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
