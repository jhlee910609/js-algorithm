function solution(_cards, _k) {
  // 조합 코딩으로 구현하는 방법
  // 조합 코딩 연습
  // 재귀활용
  const getAllCombination = (cards, k) => {
    let result = [];

    if (k === 1) {
      return cards.map((card) => [card]);
    }

    cards.forEach((card, i, origin) => {
      const rest = origin.slice(i + 1);
      const combinations = getAllCombination(rest, k - 1);
      const attach = combinations.map((com) => [card, ...com]);
      result.push(...attach);
    });
    return result;
  };
  const all = getAllCombination(_cards, _k);
  const totals = all
    .map((ele) => ele.reduce((acc, prev) => acc + prev), 0)
    .sort((a, b) => b - a);

  let set = new Set();
  let answer;

  for (let i = 0; i < totals.length; i++) {
    if (set.size === _k) break;
    if (!set.has(totals[i])) {
      set.add(totals[i]);
      answer = i;
    }
  }
  return totals[answer];
}

// 무조건 3장 뽑는다고 했으니, 위와 같이 고려할 필요 없는 문제
function solution2(input, k) {
  const sums = new Set();
  const len = input.length;
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; i < len - 1; j++) {
      for (let l = j + 1; l < len; l++) {
        sums.add(input[i] + input[j] + input[l]);
      }
      console.log(j);
    }
  }
  return Array.from([...sums]).sort((a, b) => b - a)[k - 1];
}

console.log(solution([13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 3));
console.log(solution2([13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 3));
