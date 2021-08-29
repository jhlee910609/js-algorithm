function solution(arr) {
  const first = arr[0];
  // 무조건 0번째는 보인다.
  const answer = [first];
  // 시작점에서는 가장 큰 키이다.
  let maxHeight = first;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxHeight) {
      answer.push(arr[i]);
      maxHeight = arr[i];
    }
  }
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
