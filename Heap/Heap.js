const getLeftChildIndex = (index) => 2 * index + 1;
const getRightChildIndex = (index) => 2 * index + 2;
const getParentIndex = (index) => Math.floor((index - 1) / 2);
const hasLeftChild = (index, size) => getLeftChildIndex(index) < size;
const hasRightChild = (index, size) => getRightChildIndex(index) < size;
const hasParent = (index) => getParentIndex(index) >= 0;
const getLeftChildValue = (index, items) => items[getLeftChildIndex(index)];
const getRightChildValue = (index, items) => items[getRightChildIndex(index)];
const getParentValue = (index, items) => items[getParentIndex(index)];
const swap = (a, b, xs) => {
    [xs[b], xs[a]] = [xs[a], xs[b]]
    return xs
}

const createHeap = ({ comparator } = {}) => ({
    items: [],
    heapifyUp() {
        const { items } = this;
        let index = items.length - 1;

        while (
            hasParent(index) 
            && !comparator(getParentValue(index, items), items[index])
        ) {
            this.items = swap(getParentIndex(index), index, items);
            index = getParentIndex(index);
        }
    },
    heapifyDown() {
        const { items } = this;
        let currentIndex = 0;
        let nextIndex = null;

        while (hasLeftChild(currentIndex, items.length)) {
            if (
                hasRightChild(currentIndex, items.length) 
                && comparator(getRightChildValue(currentIndex, items), getLeftChildValue(currentIndex, items))
            ) {
                nextIndex = getRightChildIndex(currentIndex)
            } else {
                nextIndex = getLeftChildIndex(currentIndex)
            }

            if (comparator(items[currentIndex],  items[nextIndex])) {
                break;
            }

            this.items = swap(currentIndex, nextIndex, items);
            currentIndex = nextIndex;
        }
    },
    // get root node
    peek() {
        if (!this.items.length) return null;
        return this.items[0];
    },
    // add new node
    push(node) {
        this.items.push(node);
        this.heapifyUp();
    },
    // extract root node
    pop() {
        const { items } = this;
        if (!items.length) return null;
        if (items.length === 1) return items.pop();
      
        const item = items[0];
      
        this.items[0] = items.pop();
        this.heapifyDown();
    
        return item;
    },
    isEmpty() {
        return !this.items.length;
    },
})

module.exports = {
    createHeap,
}