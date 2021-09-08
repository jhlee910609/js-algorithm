function solution(input) {
  return input.replace(/[^0-9]/g, "") / 1;
}

console.log(solution("g0en2T0s8eSoft") === 208);
console.log(solution("tge0a1h205er") === 1205);
