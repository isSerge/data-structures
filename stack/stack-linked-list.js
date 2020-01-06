const createStack = () => {
    const stack = {
        tail: null,
        push(data) {
            const prev = stack.tail
            stack.tail = { prev, data }
        },
        pop() {
            const element = stack.tail
            if (!element) return
            stack.tail = element.prev
            return element.data
        },
        *traverse(node = stack.tail) {
            yield node
            if (node && node.prev !== null && typeof (node.prev) === "object") {
                yield* stack.traverse(node.prev)
            }
        },
        *[Symbol.iterator]() {
            for (const node of stack.traverse()) {
                yield node && node.data
            }
        },
    }

    return stack
}

const stack = createStack()
stack.push(1)
stack.push(2)
stack.push(3)

console.log([...stack])
console.dir(stack.pop())
console.dir(stack.pop())
console.dir(stack.pop())
console.dir(stack.pop())