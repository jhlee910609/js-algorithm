function mySolution(input) {
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

function solution(input) {
  // TODO: 소수를 판별하는 가장 빠른 방법 익히기 (에라토스테네스의 접근)
  // TODO: https://jongmin92.github.io/2017/11/05/Algorithm/Concept/prime/
  const isPrime = (num) => {
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const answer = [];

  // TODO: 숫자 그대로 reverse 하는 방법 익히기
  for (let num of input) {
    let result = 0;

    while (num) {
      let temp = num % 10;
      result = result * 10 + temp;
      num = parseInt(num / 10);
    }
    if (isPrime(result)) {
      answer.push(result);
    }
  }
  return answer;
}

const inputs = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(inputs));
