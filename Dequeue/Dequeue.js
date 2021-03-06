const createDequeue = () => ({
  head: null,
  tail: null,
  length: 0,
  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node.item;
      node = node.next;
    }
  },
  // adds element to the end
  push(item) {
    const { tail } = this;
    const node = { next: null, prev: tail, item };
    if (tail) {
      tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
  },
  // takes element from the end
  pop() {
    const { tail } = this;
    if (!tail) return null;
    if (this.head === tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = tail.prev;
    }
    this.length--;
    return tail.item;
  },
  // takes element from the start
  shift() {
    const { head } = this;
    if (!head) return;
    if (this.tail === head) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = head.next;
    }
    this.length--;
    return head.item;
  },
  // adds element to the start
  unshift(item) {
    const { head } = this;
    const node = { prev: null, next: head, item };
    if (head) {
      head.prev = node;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
  },
});

module.exports = {
  createDequeue,
};
