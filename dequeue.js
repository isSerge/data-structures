const createDequeue = () => ({
  head: null,
  tail: null,
  push(item) {
    const { tail } = this
    const node = { next: null, prev: tail, item }
    if (tail) {
      tail.next = node
      this.tail = node
    } else {
      this.head = node
      this.tail = node
    }
  },
  pop() {
    const { tail } = this
    if (!tail) return
    if (this.head === tail) {
      this.head = null
      this.tail = null
    } else {
      this.tail = tail.prev
    }
    return tail.item
  },
  shift() {
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
  unshift(item) {
    const { head } = this
    const node = { prev: null, next: head, item }
    if (head) {
      head.prev = node
      this.head = node
    } else {
      this.head = node
      this.tail = node
    }
  },
})

const dequeue = createDequeue()

dequeue.push(1)
dequeue.push(2)
dequeue.unshift(3)

console.log(dequeue.pop()) // 2
console.log(dequeue.shift()) // 3
console.log(dequeue.shift()) // 1
console.log(dequeue.shift()) // undefined
console.log(dequeue.pop()) // undefined
