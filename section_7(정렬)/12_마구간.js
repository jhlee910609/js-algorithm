function solution(input, M) {
  input = input.sort((a, b) => a - b);

  function count(input, minDistance) {
    let cnt = 1; // 한 마리 놓고 시작
    let endPoint = input[0];

    for (let i = 1; i < input.length; i++) {
      // 딱 떨어지지 않을 수 있음
      if (input[i] - endPoint >= minDistance) {
        endPoint = input[i];
        cnt++;
      }
    }
    return cnt;
  }

  let lt = 1; // 거리
  let rt = input[input.length - 1]; // 끝
  let ans;

  // 2분 검색 종료 조건
  while (lt <= rt) {
    let distance = parseInt((lt + rt) / 2); // mid 거리
    if (count(input, distance) >= M) {
      ans = distance;
      lt = distance + 1;
    } else {
      rt = distance - 1;
    }
  }
  return ans;
}

console.log(solution([1, 2, 8, 4, 9], 3) === 3);
