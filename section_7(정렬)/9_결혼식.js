function solution(input) {
  const temp = [];
  let ans = 0;

  for (let x of input) {
    temp.push([x[0], "s"]);
    temp.push([x[1], "e"]);
  }

  temp.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1].charCodeAt() - b[1].charCodeAt();
    }
    return a[0] - b[0];
  });

  let cnt = 0;

  temp.forEach((a) => {
    console.log(a);
    if (a[1] === "s") {
      cnt++;
    } else {
      cnt--;
    }
    ans = Math.max(cnt, ans);
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
