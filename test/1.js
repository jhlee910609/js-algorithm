function solution(a) {
  const res = [];
  const temp = String(a).split("").reverse();
  for (let i = 0; i < temp.length; i++) {
    if (i && i % 3 === 0) {
      res.push(",");
    }
    res.push(temp[i]);
  }
  return res.reverse().join("");
}

// 123123555
// 123,123,555

console.log(solution(123123899555));
