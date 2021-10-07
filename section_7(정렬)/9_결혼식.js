function solution(input) {
  let ans = 0;
  const temp = [];

  for (let x of input) {
    temp.push([x[0], "s"]);
    temp.push([x[1], "e"]);
  }
  console.log(temp);

  temp.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  return ans;
}

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
