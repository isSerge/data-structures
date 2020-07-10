const { createHeap } = require('./Heap')

function greaterThanOrEqual(a, b) {
    return a >= b
}

it("Should create empty heap with provided capacity", () => {
    const maxHeap = createHeap({ comparator: greaterThanOrEqual });

    expect(maxHeap.isEmpty()).toBe(true);
});

it("Should add node to the heap and rebalance nodes", () => {
    const maxHeap = createHeap({ comparator: greaterThanOrEqual });
    const node1 = 50;
    const node2 = 100;
    const node3 = 200;

    expect(maxHeap.isEmpty()).toBe(true);

    maxHeap.push(node1);

    expect(maxHeap.isEmpty()).toBe(false);
    expect(maxHeap.peek()).toBe(node1);

    maxHeap.push(node2);
    expect(maxHeap.peek()).toBe(node2);

    maxHeap.push(node3);
    expect(maxHeap.peek()).toBe(node3);
});

it("Peek should return null if there is no root node", () => {
    const maxHeap = createHeap({ comparator: greaterThanOrEqual });

    expect(maxHeap.isEmpty()).toBe(true);
    expect(maxHeap.peek()).toEqual(null);
});

it("Peek should return root node from the heap", () => {
    const maxHeap = createHeap({ comparator: greaterThanOrEqual });
    const node = 10;

    maxHeap.push(node);

    expect(maxHeap.isEmpty()).toBe(false);

    expect(maxHeap.peek()).toEqual(node);
});

it("Pop should return null if there is no root node", () => {
    const maxHeap = createHeap({ comparator: greaterThanOrEqual });

    expect(maxHeap.isEmpty()).toBe(true);
    expect(maxHeap.pop()).toBeNull();
});

it("Pop should return root node from the heap and rebalance nodes", () => {
    const maxHeap = createHeap({ comparator: greaterThanOrEqual });

    maxHeap.push(5);
    maxHeap.push(3);
    maxHeap.push(10);
    maxHeap.push(11);
    maxHeap.push(1);

    expect(maxHeap.isEmpty()).toBe(false);
    expect(maxHeap.pop()).toBe(11);
    expect(maxHeap.pop()).toBe(10);
    expect(maxHeap.pop()).toBe(5);
    expect(maxHeap.pop()).toBe(3);
    expect(maxHeap.pop()).toBe(1);
    expect(maxHeap.pop()).toBeNull();
});