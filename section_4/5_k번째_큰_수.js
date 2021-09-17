function solution(_cards, _k) {
  // 조합 코딩으로 구현하는 방법
  // 재귀활용
  const getAllCombination = (cards, k) => {
    let result = [];

    if (k === 1) {
      console.log(cards);
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

console.log(solution([13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 3));
