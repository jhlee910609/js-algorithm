// 각 자리수의 합
function mySolution(input) {
  let answer = -1;
  const numbs = input.split(" ");

  for (let i = 0; i < numbs.length; i++) {
    let temp = numbs[i];
    let sum = 0;

    while (temp !== 0) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }

    if (sum >= answer) {
      answer = sum;
      answerIdx = i;
    }
  }

  return numbs[answerIdx];
}

console.log(mySolution("128 460 603 40 521 137 123") == 137);
