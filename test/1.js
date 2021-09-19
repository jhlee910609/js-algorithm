function solution(a) {
  a = a + "";
  let pointer = a.length % 3;
  let str = a.substring(0, pointer);
  while (pointer < a.length) {
    if (str !== "") str += ",";
    str += a.substring(pointer, pointer + 3);
    pointer += 3;
  }
  return str;
}

// 123123555
// 123,123,555

console.log(solution(123113899555));
