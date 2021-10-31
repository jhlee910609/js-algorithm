/**
 *
 * @param {Array} coins
 * @param {number} M
 */
function solution(coins, M) {
  const temp = Array.from({ length: M + 1 }, () => 1000);
  temp[0] = 0; // 걍 임의로 초기화

  // coin 종류
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];

    for (let j = coin; j <= M; j++) {
      temp[j] = Math.min(temp[j], temp[j - coin] + 1);
    }
    console.log(coin, temp);
  }
  return temp[M];
}

console.log(solution([1, 2, 5], 15) === 3);
