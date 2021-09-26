function solution(input) {
  let stack = [];
  for (let c of input) {
    if (c !== ")") {
      stack.push(c);
    } else {
      let temp = stack.pop();
      while (temp !== "(" && stack.length > 0) {
        temp = stack.pop();
      }
    }
  }
  return stack.join("");
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)") === "EFLM");
console.log(solution("(A(B)CDEF") === "ACDEF");
