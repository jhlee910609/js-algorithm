function solution(new_id) {
  var answer = "";
  return new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, "")
    .replace(/[.]{2,}/g, "");
}

console.log(solutions("...!@BaT#*..y.abcdefghijklm"));
