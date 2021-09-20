function solution(a, b) {
  const answer = [];
  a = a.sort((_a, _b) => _a - _b);
  b = b.sort((_a, _b) => _a - _b);
  let p1 = 0;
  let p2 = 0;
  while (p1 < a.length && p2 < b.length) {
    if (a[p1] === b[p2]) {
      answer.push(a[p1++]);
      p2++;
    } else if (a[p1] < b[p2]) {
      p1++;
    } else {
      p2++;
    }
  }
  return answer;
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
