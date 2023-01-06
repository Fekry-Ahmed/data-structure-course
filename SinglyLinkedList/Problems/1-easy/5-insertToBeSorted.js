function insertToBeSorted(val) {
  if (this.head.val > val) {
    this.unShift(val);

    return this;
  }
  if (this.tail.val < val) {
    this.push(val);

    return this;
  }

  const newNode = new Node(val);

  let curNode = this.head;
  let prevNode = null;

  while (curNode) {
    if (val <= curNode.val) {
      prevNode.next = newNode;
      newNode.next = curNode;
      break;
    }

    prevNode = curNode;
    curNode = curNode.next;
  }

  this.length++;

  return this.head;
}
