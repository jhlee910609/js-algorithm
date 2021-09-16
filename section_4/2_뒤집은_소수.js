function solution(input) {
  const answer = [];
  for (let i = 0; i < input.length; i++) {
    const reversed = Number(String(input[i]).split("").reverse().join(""));
    let isAnswer = true;
    for (let j = 2; j < reversed / 2; j++) {
      if (reversed % j === 0) {
        isAnswer = false;
        break;
      }
    }
    if (isAnswer) {
      answer.push(reversed);
    }
  }
  return answer;
}

const inputs = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(inputs));
