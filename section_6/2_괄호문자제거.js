function solution(input) {
  let stack = [];
  for (let c of input) {
    if (c === ")") {
      while (stack.pop() !== "(") {}
    } else {
      stack.push(c);
    }
  }
  return stack.join("");
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)") === "EFLM");
console.log(solution("(A(B))C(DE)F") === "CF");
