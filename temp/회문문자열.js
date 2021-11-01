function solution(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i].toLowerCase(), str[str.length - 1 - i].toLowerCase());
    if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) {
      return "NO";
    }
  }
  return "YES";
}

console.log(solution("gooG") === "YES");
