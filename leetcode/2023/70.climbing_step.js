/**
 * @param {number} n
 * @return {number}
 */
const cache = {}; // time limit 떠서 캐시처리
var climbStairs = function (n) {
  if (n === 1 || n === 0) return 1;
  if (cache[n]) {
    return cache[n];
  }
  const result = climbStairs(n - 1) + climbStairs(n - 2);
  cache[n] = result;
  return result;
};
