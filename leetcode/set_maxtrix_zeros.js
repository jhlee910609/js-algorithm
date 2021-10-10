/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // 1. 0이 있는 위치를 찾는다.

  const zero = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) zero.push([i, j]);
    }
  }

  // 처음에 그냥 for문 활용하였는데 효율성이 좋지 못한 것 같아 아래와 같이 수정
  // 찾은 좌표 기준으로 상,하,좌,우를 0로 만들 수 있게 짜본다.
  for (let i = 0; i < zero.length; i++) {
    // 위로 0 만들기
    const [x, y] = zero[i];
    for (let j = x; j >= 0; j--) {
      matrix[j][y] = 0;
    }

    // 아래로 0 만들기
    for (let j = x; j < matrix.length; j++) {
      matrix[j][y] = 0;
    }

    // 왼쪽으로 0 만들기
    for (let j = y; j >= 0; j--) {
      matrix[x][j] = 0;
    }

    // 오른쪽으로 0 만들기
    for (let j = y; j < matrix[0].length; j++) {
      matrix[x][j] = 0;
    }
  }

  return matrix;
};
