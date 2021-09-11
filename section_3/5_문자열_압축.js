/**
 * 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우
 * 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오.
 * 단 반복횟수가 1인 경우 생략합니다.
 **/

function solution(word) {
  let answer = "";
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    // 같으면 숫자 더함
    if (answer[answer.length - 1] === word[i]) {
      count++;
    } else {
      // 다르면
      if (count > 1) {
        answer += count.toString();
      }
      count = 1;
      answer += word[i];
    }
  }

  return answer;
}

const result = solution("KKHSSSSSSSE");
console.log(result);
console.log(result === "K2HS7E");
