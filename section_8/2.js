// 재귀로 이진수 출력하기
function solution(input) {
  let ans = "";

  function binary(num) {
    if (num < 2) {
      ans += num;
      return;
    }

    binary(parseInt(num / 2));
    console.log(num);
    ans += num % 2;
  }

  binary(input);
  console.log("ans", ans);
  return ans;
}

console.log(solution(11) == "1011");
