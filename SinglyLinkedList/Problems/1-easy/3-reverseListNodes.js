function reverse() {
  let curNode = this.head;
  let prevNode = null;

  while (curNode) {
    const nextNode = curNode.next;
    curNode.next = prevNode;
    prevNode = curNode;
    curNode = nextNode;
  }

  const temp = this.head;
  this.head = this.tail;
  this.tail = temp;

  return this.head;
}
