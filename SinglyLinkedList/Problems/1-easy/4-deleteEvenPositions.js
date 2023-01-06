function deleteEvenPositions() {
  let curNode = this.head.next;
  let prevNode = this.head;
  let counter = 2;

  while (curNode) {
    if (!(counter % 2)) {
      prevNode.next = curNode.next;
      this.length--;
    }

    counter++;
    prevNode = curNode;
    curNode = curNode.next;
  }
}
