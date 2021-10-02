function solution1(a, b) {
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

console.log(solution1("CBA", "CBAGFE") === "YES");

function solution2(curri, plan) {
  let ans = "YES";
  const q = [...curri];

  for (let x of plan) {
    if (q.includes(x) && q.shift() !== x) return "NO";
  }
  if (q.length > 0) return "NO";
  return ans;
}

console.log(solution2("CBA", "CABGFE") === "NO");
