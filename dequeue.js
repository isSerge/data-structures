const createDequeue = () => {
  const dequeue = {
    head: null,
    tail: null,
    push(item) {
      const { tail } = dequeue
      const node = { next: null, prev: tail, item }
      if (tail) {
        tail.next = node
        dequeue.tail = node
      } else {
        dequeue.head = node
        dequeue.tail = node
      }
    },
    pop() {
      const { tail } = dequeue
      if (!tail) return
      if (dequeue.head === tail) {
        dequeue.head = null
        dequeue.tail = null
      } else {
        dequeue.tail = tail.prev
      }
      return tail.item
    },
    shift() {
      const { head } = dequeue
      if (!head) return
      if (dequeue.tail === head) {
        dequeue.head = null
        dequeue.tail = null
      } else {
        dequeue.head = head.next
      }
      return head.item
    },
    unshift(item) {
      const { head } = dequeue
      const node = { prev: null, next: head, item }
      if (head) {
        head.prev = node
        dequeue.head = node
      } else {
        dequeue.head = node
        dequeue.tail = node
      }
    },
  }

  return dequeue
}

const dequeue = createDequeue()

dequeue.push(1)
dequeue.push(2)
dequeue.unshift(3)

console.log(dequeue.pop()) // 2
console.log(dequeue.shift()) // 3
console.log(dequeue.shift()) // 1
console.log(dequeue.shift()) // undefined
console.log(dequeue.pop()) // undefined
