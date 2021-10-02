function solution(a, b) {
  const temp = [...a];
  let lastIdx = -1;

  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (temp[i] === b[j]) {
        if (lastIdx > j) {
          return "NO";
        }
        lastIdx = j;
        break;
      }
    }
  }
  return "YES";
}

console.log(solution("CBA", "CBAGFE") === "YES");
