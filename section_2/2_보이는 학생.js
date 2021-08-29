function solution(arr) {
  const [first] = arr;
  const result = [first];
  let maxHeight = first;
  for (let i = 1; i < arr.legnth; i++) {
    if (arr[i] > maxHeight) {
      maxHeight = arr[i];
    }
  }
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
