const { createHeap } = require('./Heap')

function lessThanOrEqual(a, b) {
    return a <= b
}

it("Should create empty heap with provided capacity", () => {
    const minHeap = createHeap({ comparator: lessThanOrEqual });

    expect(minHeap.isEmpty()).toBe(true);
});

it("Should add node to the heap and rebalance nodes", () => {
    const minHeap = createHeap({ comparator: lessThanOrEqual });
    const node1 = 50;
    const node2 = 100;
    const node3 = 200;

    expect(minHeap.isEmpty()).toBe(true);

    minHeap.push(node1);

    expect(minHeap.isEmpty()).toBe(false);
    expect(minHeap.peek()).toBe(node1);

    minHeap.push(node2);
    expect(minHeap.peek()).toBe(node1);

    minHeap.push(node3);
    expect(minHeap.peek()).toBe(node1);
});

it("Peek should return null if there is no root node", () => {
    const minHeap = createHeap({ comparator: lessThanOrEqual });

    expect(minHeap.isEmpty()).toBe(true);
    expect(minHeap.peek()).toEqual(null);
});

it("Peek should return root node from the heap", () => {
    const minHeap = createHeap({ comparator: lessThanOrEqual });
    const node = 10;

    minHeap.push(node);

    expect(minHeap.isEmpty()).toBe(false);

    expect(minHeap.peek()).toEqual(node);
});

it("Pop should return null if there is no root node", () => {
    const minHeap = createHeap({ comparator: lessThanOrEqual });

    expect(minHeap.isEmpty()).toBe(true);
    expect(minHeap.pop()).toBeNull();
});

it("Pop should return root node from the heap and rebalance nodes", () => {
    const minHeap = createHeap({ comparator: lessThanOrEqual });

    minHeap.push(5);
    minHeap.push(3);
    minHeap.push(10);
    minHeap.push(11);
    minHeap.push(1);

    expect(minHeap.isEmpty()).toBe(false);
    expect(minHeap.pop()).toBe(1);
    expect(minHeap.pop()).toBe(3);
    expect(minHeap.pop()).toBe(5);
    expect(minHeap.pop()).toBe(10);
    expect(minHeap.pop()).toBe(11);
    expect(minHeap.pop()).toBeNull();
});