/**
 * @param {number} n
 * @return {number}
 */
const cache = {}; // time limit 떠서 캐시처리
var climbStairs = function (n) {
  if (n === 1 || n === 0) return 1;
  if (cache[n]) return cache[n]; // 캐시에 있으면 그대로 return
  const result = climbStairs(n - 1) + climbStairs(n - 2); // 없으면 재귀 연산
  cache[n] = result; // 연산 후, 캐시 저장
  return result; // 가지수 return
};
