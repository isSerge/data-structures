const createNode = (data, next = null) => ({ data, next })

const createLinkedList = () => ({
  head: null,
  length: 0,
  *traverse(node = this.head) {
    yield node
    if (node && node.next !== null && typeof (node.next) === "object") {
      yield* this.traverse(node.next)
    }
  },
  *[Symbol.iterator]() {
    for (const node of this.traverse()) {
      yield node && node.data
    }
  },
  append(data) {
    if (!this.head) {
      this.head = createNode(data)
    } else {
      for (const node of this.traverse()) {
        if (!node.next) {
          node.next = createNode(data)
          break
        }
      }
    }
    this.length++
  },
  find(data) {
    for (const node of this.traverse()) {
      if (node && node.data === data) return node
    }
  },
  getNth(index) {
    let count = 0
    for (const node of this.traverse()) {
      if (count === index) return node
      count++
    }
  },
  prepend(data) {
    const node = createNode(data, this.head)
    this.head = node
    this.length++
  },
  remove(data) {
    let prev = null
    for (const node of this.traverse()) {
      if (node && node.data === data) {
        if (node === this.head) {
          this.head = node.next
        } else {
          prev.next = node.next
        }
        this.length--
      }
      prev = node
    }
  },
}
)

const list = createLinkedList()
list.append(1)
list.append(2)
list.append(3)
list.prepend(4)
list.remove(3)
console.log(list.find(1)) // { data: 1 }
console.log(list.getNth(0)) // { data: 4 }
console.log(list.length) // 3
console.log([...list]) // [4, 1, 2]
