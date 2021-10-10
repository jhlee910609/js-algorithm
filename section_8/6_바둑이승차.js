function solution(C, dogs) {
  const flags = Array.from({ length: dogs.length }).map((v) => false);
  let max = -1;

  function dfs(L, sum) {
    if (L === dogs.length) {
      let temp = 0;
      for (let i = 0; i < dogs.length; i += 1) {
        if (flags[i]) {
          temp += dogs[i];
        }
        if (temp <= C) {
          max = Math.max(temp, max);
        }
      }
    } else {
      flags[L] = true;
      dfs(L + 1, sum + flags[L]);

      flags[L] = false;
      dfs(L + 1, sum);
    }
  }
  dfs(0, 0);
  return max;
}

console.log(solution(259, [81, 58, 42, 33, 61]));
