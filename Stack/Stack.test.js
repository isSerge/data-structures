const { createStack } = require('./Stack')

it("Should create empty stack", () => {
    const stack = createStack();

    expect(stack.length).toBe(0);
    expect(stack.tail).toBeNull();
});

it("Should push new elements to stack", () => {
    const stack = createStack();

    expect(stack.tail).toBeNull();

    stack.push(1);
    stack.push(2);

    expect(stack.length).toBe(2);
    expect(stack.tail.item).toBe(2);
});

it("Should pop elements from stack", () => {
    const stack = createStack();

    expect(stack.tail).toBeNull();

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.length).toBe(0);
});

it("Should return null if pop from empty stack", () => {
    const stack = createStack();

    expect(stack.tail).toBeNull();
    expect(stack.length).toBe(0);
    expect(stack.pop()).toBeNull();
});

it("Should support iterable", () => {
    const stack = createStack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect([...stack]).toEqual([3, 2, 1]);
});