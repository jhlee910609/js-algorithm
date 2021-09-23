function solution(a, b) {
  const aMap = new Map();
  const bMap = new Map();

  for (let i = 0; i < a.length; i++) {
    const aTemp = aMap.get(a[i]) || 0;
    aMap.set(a[i], aTemp + 1);

    const bTemp = bMap.get(b[i]) || 0;
    bMap.set(b[i], bTemp + 1);
  }

  for (let [k, v] of aMap) {
    if (v !== bMap.get(k)) {
      return "NO";
    }
  }
  return "YES";
}

console.log(solution("AbaAeCe", "baeeACA") === "YES");
console.log(solution("abaCC", "Caaab") === "NO");
