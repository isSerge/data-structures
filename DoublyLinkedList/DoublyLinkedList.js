const createNode = (data, next = null, prev = null) => ({ data, next, prev })

const createDoublyLinkedList = () => ({
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
      newNode.prev = node;
    }

    this.length++;
  },
  prepend(data) {
    const node = createNode(data, this.head)
    if (this.head) this.head.prev = node
    this.head = node
    this.length++
  },
  remove(data) {
    let node = this.head;

    while (node) {
      if (node.data === data) {
        if (node === this.head) {
          this.head = node.next;
        } else {
          node.prev.next = node.next;
          if (node.next) {
            node.next.prev = node.prev;
          }
        }
        this.length--;
      }
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
})

module.exports = {
  createDoublyLinkedList,
};

// const list = createDoublyLinkedList()
// list.append(1)
// list.append(2)
// list.append(3)
// list.prepend(4)
// list.remove(3)
// console.log(list.find(1)) // { data: 1 }
// // console.log(list.getNth(0)) // { data: 4 }
// console.log(list.length) // 3
// // console.log(list.head) // 3
// console.log([...list]) // [4, 1, 2]

