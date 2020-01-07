const createQueue = () => {
  const queue = {
    head: null,
    tail: null,
    put(item) {
      const node = { next: null, item }
      const { tail } = queue
      if (tail) {
        tail.next = node
        queue.tail = node
      } else {
        queue.head = node
        queue.tail = node
      }
    },
    pick() {
      const { head } = queue
      if (!head) return
      if (queue.tail === head) {
        queue.head = null
        queue.tail = null
      } else {
        queue.head = head.next
      }
      return head.item
    },
  }

  return queue
}

const queue = createQueue()

queue.put(1)
queue.put(2)
queue.put(3)

console.log(queue.pick())
console.log(queue.pick())
console.log(queue.pick())
console.log(queue.pick())

