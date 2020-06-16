const createQueue = () => ({
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
  put(item) {
    const node = { next: null, item };
    const { tail } = this;
    if (tail) {
      tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
  },
  // takes element from the start
  pick() {
    const { head } = this;
    if (!head) return null;
    if (this.tail === head) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = head.next;
    }
    this.length--;
    return head.item;
  },
});

module.exports = {
  createQueue,
};
