function solution(a, b) {
  const aMap = new Map();
  let answer = "YES";

  for (let x of a) {
    const aTemp = aMap.get(x) || 0;
    aMap.set(x, aTemp + 1);
  }

  for (let x of b) {
    if (!aMap.has(x) || aMap.get(x) === 0) {
      return "NO";
    }

    aMap.set(x, aMap.get(x) - 1);
  }
  return answer;
}

console.log(solution("AbaAeCe", "baeeACA") === "YES");
console.log(solution("abaCC", "Caaab") === "NO");
