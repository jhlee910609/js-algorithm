// Two pointers algorithm
function solution(a, b) {
  const answer = [];
  let i = (j = 0);
  while (i < a.length || j < b.length) {
    if (a[i] < b[j]) {
      answer.push(a[i]);
      i++;
    } else {
      answer.push(b[j]);
      j++;
    }
  }
  return answer;
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
