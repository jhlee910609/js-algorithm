function solution(input) {
  let temp = "";

  for (let i = 0; i < input.length; i++) {
    if (input.charCodeAt(i) >= 48 && input.charCodeAt(i) <= 57) {
      temp += input[i];
    }
  }
  return Number(temp);
}

console.log(solution("tge0a1h205er") === 1205);
