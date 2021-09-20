function solution(numbers, hand) {
  let answer = "";
  let cl = "*";
  let cr = "#";

  const left = [1, 4, 7];
  const right = [3, 6, 9];
  const center = [2, 5, 8, 0];

  for (let i = 0; i < numbers.length; i++) {
    if (left.includes(numbers[i])) {
      answer += "L";
      cl = numbers[i];
    } else if (right.includes(numbers[i])) {
      answer += "R";
      cr = numbers[i];
    } else {
      answer += "F";
    }
  }
  console.log(answer);
  return answer;
}

console.log(
  solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right") === "LRLLLRLLRRL"
);
