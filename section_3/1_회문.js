function solution(word) {
  const len = word.length;
  if (len % 2 === 0) {
    for (let i = 0; i < len / 2; i++) {
      if (word[i].toLowerCase() !== word[len - i - 1].toLowerCase()) {
        return "NO";
      }
      return "YES";
    }
  } else {
  }
}

console.log(solution("gooG"));
