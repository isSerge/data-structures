const createQueue = () => ({
  head: null,
  tail: null,
  put(item) {
    const node = { next: null, item }
    const { tail } = this
    if (tail) {
      tail.next = node
      this.tail = node
    } else {
      this.head = node
      this.tail = node
    }
  },
  pick() {
    const { head } = this
    if (!head) return
    if (this.tail === head) {
      this.head = null
      this.tail = null
    } else {
      this.head = head.next
    }
    return head.item
  },
})

const queue = createQueue()

queue.put(1)
queue.put(2)
queue.put(3)

console.log(queue.pick())
console.log(queue.pick())
console.log(queue.pick())
console.log(queue.pick())

