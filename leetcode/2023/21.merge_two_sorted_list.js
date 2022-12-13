/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // 처음엔 재귀로 품
  // 근데 시간복잡도, 공간복잡도 모두 떨어짐
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return null;
  let res = new ListNode();
  let current = res;
  while (list1 && list2) {
    // 둘다 있을때 while문
    if (list1.val < list2.val) {
      current.next = list1;
      current = current.next;
      list1 = list1.next;
    } else {
      current.next = list2;
      current = current.next;
      list2 = list2.next;
    }
  }
  // 다 비워줌
  if (!list1) {
    current.next = list2;
  }
  // 다 비워줌
  if (!list2) {
    current.next = list1;
  }
  return res.next;
};

/**
 * merge sort 기본 묻는 문제
 * 구현할 줄 알면 우선 풀 수는 있음
 */
