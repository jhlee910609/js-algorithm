function solution(word) {
  const len = word.length;
  for (let i = 0; i < len / 2; i++) {
    if (word[i].toLowerCase() !== word[len - i - 1].toLowerCase()) {
      return "NO";
    }
    return "YES";
  }
}

console.log(solution("goo"));
