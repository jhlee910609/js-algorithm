function solution(input) {
  const len = input.length / 2;
  const visited = Array.from({ length: input.length }, () => false);

  function dfs(L) {
    if (L === len) {
    } else {
        for(let i=0; i < input.length; i++){
            if(visited[i])
        }
    }
  }
}

console.log(solution([3, 1, 2, 3]));
