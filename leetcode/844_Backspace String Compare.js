/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// O(n) for문 한번
// O(1) idx로
var backspaceCompare = function (s, t) {
  // 뒤에서부터 도는 게 좋을 것 같다.
  // #을 만나면 #과 # idx - 1 을 지워버린다.
  // 연속된 # 인지도 체크해야한다.
  // 뒤부터 도는데
  let si = s.length - 1;
  let ti = t.length - 1;

  while (si >= 0 || ti >= 0) {
    si = clear(s, si); // 백스페이스 제거
    ti = clear(t, ti); // 백스페이스 제거

    // 제거 후, 문자열 다르면 다른 문자
    if (s[si] !== t[ti]) return false;

    // 그렇지 않으면 또 지나감
    si--, ti--;
  }
  return true;

  function clear(str, i) {
    let skip = 0;

    while (i >= 0) {
      if (str[i] === "#") {
        skip++, i--;
      } else if (skip > 0) {
        skip--, i--; // 아무 것도 하지 않고, 지나가는 코드 (백스페이스 적용)
      } else {
        break;
      }
    }
    return i;
  }
};

console.log(backspaceCompare("ab##", "c#d#"));
