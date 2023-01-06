function deleteWithKey(val) {
  let curNode = this.head;
  let prevNode = null;

  while (curNode) {
    if (this.head.val === val) {
      this.head = curNode = this.head.next;
      continue;
    }

    if (curNode.val === val) {
      prevNode.next = curNode.next;
    } else {
      prevNode = curNode;
    }

    curNode = curNode.next;
  }

  return this.head;
}
