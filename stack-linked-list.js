const createStack = () => ({
    tail: null,
    push(data) {
        const prev = this.tail
        this.tail = { prev, data }
    },
    pop() {
        const element = this.tail
        if (!element) return
        this.tail = element.prev
        return element.data
    },
    *traverse(node = this.tail) {
        yield node
        if (node && node.prev !== null && typeof (node.prev) === "object") {
            yield* this.traverse(node.prev)
        }
    },
    *[Symbol.iterator]() {
        for (const node of this.traverse()) {
            yield node && node.data
        }
    },
})

const stack = createStack()
stack.push(1)
stack.push(2)
stack.push(3)

console.log([...stack])
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.pop()); // undefined