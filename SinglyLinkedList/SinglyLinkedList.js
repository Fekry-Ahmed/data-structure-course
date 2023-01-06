class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  unShift(val) {
    const newNode = new Node(val);

    newNode.next = this.head;

    this.head = newNode;

    this.length++;

    return this;
  }

  print() {
    let curNode = this.head;
    while (curNode) {
      console.log(curNode);
      curNode = curNode.next;
    }
  }

  findByIndex(index) {
    let counter = 0;
    let curNode = this.head;

    while (counter <= index) {
      if (!curNode) return null;
      if (counter === index) return curNode;
      curNode = curNode.next;
      counter++;
    }
    return null;
  }

  find(val) {
    for (let curNode = this.head, i = 0; curNode; curNode = curNode.next, i++) {
      if (curNode.val === val) return { curNode, i };
    }
    return -1;
  }

  // -----------------------------
  // 5 EASY CHALLENGES
  // -----------------------------
  deleteWithKey(val) {
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

  swapEachPair() {
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

  reverse() {
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

  deleteEvenPositions() {
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

  insertToBeSorted(val) {
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

  // -----------------------------
  // 6 MEDIUM CHALLENGES
  // -----------------------------
  // -----------------------------
  // 5 MEDIUM TO HARD CHALLENGES
  // -----------------------------
}

const List = new SinglyLinkedList();

const arr = [1, 2, 3, 5, 6, 7];
arr.forEach((element) => {
  List.push(element);
});
List.print();
