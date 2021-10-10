function solution(num) {
  function DFS(L) {
    if (L === 0) return;
    // 0이면 빠져 나온다.
    else {
      DFS(L - 1); // 재귀를 태우고
      console.log(L); // 재귀가 끝나면 스택에 쌓인 로그를 출력한다.
    }
  }
  DFS(num);
}

solution(20);
