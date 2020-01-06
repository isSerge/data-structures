const createStack = () => {
    const stack = {
        items: [],
        push(item) {
            return stack.items.push(item)
        },
        pop() {
            return stack.items.pop()
        },
        *[Symbol.iterator]() {
            for (const node of stack.items) {
                yield node
            }
        },
    }

    return stack
}

const stack = createStack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log([...stack])
console.dir(stack.pop());
console.dir(stack.pop());
console.dir(stack.pop());
console.dir(stack.pop());