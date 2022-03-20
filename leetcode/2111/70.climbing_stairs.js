/**
 *
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  return climb_stairs(0, n);
};

function climb_stairs(start, end, memo = []) {
  if (start > end) return 0;
  if (start == end) return 1;
  if (memo[start]) {
    return memo[start];
  } else {
    memo[start] =
      climb_stairs(start + 1, end, memo) + climb_stairs(start + 2, end, memo);
    return memo[start];
  }
}
