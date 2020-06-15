const createNode = (data, next = null) => ({ data, next });

const createLinkedList = () => ({
  head: null,
  length: 0,
  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node.data;
      node = node.next;
    }
  },
  append(data) {
    const newNode = createNode(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let node = this.head;

      while (node.next) {
        node = node.next;
      }

      node.next = newNode;
    }

    this.length++;
  },
  prepend(data) {
    const node = createNode(data, this.head);
    this.head = node;
    this.length++;
  },
  remove(data) {
    let prev = null;
    let node = this.head;

    while (node) {
      if (node && node.data === data) {
        if (node === this.head) {
          this.head = node.next;
        } else {
          prev.next = node.next;
        }
        this.length--;
      }
      prev = node;
      node = node.next;
    }
  }, 
  find(data) {
    if (!this.head) return null
    
    let current = this.head

    while (current) {
      if (data !== undefined && current.data === data) {
        return current
      } 

      current = current.next
    }

    return null
  },
});

module.exports = {
  createLinkedList,
};
