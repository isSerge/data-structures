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
