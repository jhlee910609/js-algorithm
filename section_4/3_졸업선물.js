// 뭔가를 구하려고 하는데 기준이 명확하지 않다? 모든 조건에 대해 다 찾아야 한다. > brute force
function solution(input, budget) {
  let answer = 0;
  //   let answerArray = [];

  const len = input.length;
  // 1. 오름차순 정렬
  input = input.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < len; i++) {
    // 2. 할인
    const res = [input[i]];
    const discountPrice = input[i][0] / 2 + input[i][1];
    // 3. 할인된 상품 무조건 구매해야하므로 초기화 1로
    let cnt = 1;
    // 4. 예산
    let temp = budget - discountPrice;

    for (let j = 0; j < len; j++) {
      if (j === i) continue;
      if (temp < input[j][0] + input[j][1]) {
        break;
      } else {
        temp -= input[j][0] + input[j][1];
        res.push(input[j]);
        cnt++;
      }
    }
    if (answer < cnt) {
      //   answerArray = res;
      answer = cnt;
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [6, 6],
      [2, 2],
      [4, 3],
      [4, 5],
      [10, 3],
    ],
    28
  )
);
