var firstMissingPositive = function (arr) {
  let i = 0;
  console.log("origin:", arr);
  while (i < arr.length) {
    let corr = arr[i] - 1;
    if (arr[i] > 0 && arr[i] <= arr.length && arr[i] !== arr[corr]) {
      console.log(corr, arr[i]);
      swap(arr, i, corr);
      console.log(arr);
    } else {
      i++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) return i + 1;
  }
  return arr.length + 1;
};
function swap(arr, a, b) {
  let t = arr[a];
  arr[a] = arr[b];
  arr[b] = t;
}

console.log(firstMissingPositive([3, 4, -1, 1]));
