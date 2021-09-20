// Two pointers algorithm
function solution(a, b) {
  const answer = [];
  const n = a.length;
  const m = b.length;
  let i = (j = 0);
  while (i < n || j < m) {
    if (a[i] <= b[j]) {
      answer.push(a[i++]);
    } else {
      answer.push(b[j++]);
    }
  }
  while (i < a.length) answer.push(a[i++]);
  while (j < b.length) answer.push(b[j++]);
  return answer;
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
