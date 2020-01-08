const createStack = () => ({
    items: [],
    push(item) {
        return this.items.push(item)
    },
    pop() {
        return this.items.pop()
    },
    *[Symbol.iterator]() {
        for (const node of this.items) {
            yield node
        }
    },
})

const stack = createStack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log([...stack])
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.pop()); // undefined