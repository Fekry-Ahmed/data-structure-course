function swapEachPair() {
  let curNode = this.head;

  while (curNode) {
    if (curNode.next) {
      const temp = curNode.val;
      curNode.val = curNode.next.val;
      curNode.next.val = temp;

      curNode = curNode.next.next;
    } else {
      curNode = curNode.next;
    }
  }
}
