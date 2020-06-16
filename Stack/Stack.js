const createStack = () => ({
    tail: null,
    length: 0,
    push(item) {
        const prev = this.tail;
        this.tail = { prev, item };
        this.length++;
    },
    pop() {
        const element = this.tail;
        if (!element) return null;
        this.tail = element.prev;
        this.length--;
        return element.item;
    },
    *[Symbol.iterator]() {
        let node = this.tail;

        while (node) {
            yield node.item;
            node = node.prev;
        }
    },
});

module.exports = {
    createStack,
};
