function solution(s) {
  let answer;
  const mid = Math.floor(s.length / 2);
  if (mid % 2) {
    answer = s.substring(mid - 1, mid + 1);
  } else {
    answer = s[mid];
  }
  return answer;
}
console.log(solution("beauty"));
