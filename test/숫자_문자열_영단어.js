// https://programmers.co.kr/learn/courses/30/lessons/81301
function solution(input) {
  let res = input;
  res = res.replace("one", "1");
  res = res.replace("two", "2");
  res = res.replace("three", "3");
  res = res.replace("four", "4");
  res = res.replace("five", "5");
  res = res.replace("six", "6");
  res = res.replace("seven", "7");
  res = res.replace("eight", "8");
  res = res.replace("nine", "9");
  return res;
}

console.log(solution("one4seveneight") == 1478);
