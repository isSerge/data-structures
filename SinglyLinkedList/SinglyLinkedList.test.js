const { createLinkedList } = require("./SinglyLinkedList");

it("Should create empty linked list", () => {
    const list = createLinkedList();
    expect(list.length).toBe(0);
});

it("Should append new node to linked list", () => {
    const list = createLinkedList();

    expect(list.head).toBeNull();

    list.append(1);
    list.append(2);

    expect(list.length).toBe(2);
    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(2);
});

it("Should preppend new node to linked list", () => {
    const list = createLinkedList();

    expect(list.head).toBeNull();

    list.prepend(1);

    expect(list.length).toBe(1);
    expect(list.head.data).toBe(1);
    expect(list.head.next).toBeNull();

    list.prepend(2);

    expect(list.length).toBe(2);
    expect(list.head.data).toBe(2);
    expect(list.head.next.data).toBe(1);
});

it("Should remove node from linked list", () => {
    const list = createLinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.prepend(4);
    list.remove(3);

    expect(list.length).toBe(3);
    expect(list.head.data).toBe(4);
    expect(list.head.next.data).toBe(1);
    expect(list.head.next.next.data).toBe(2);
});

it('Should find node by value', () => {
    const list = createLinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.prepend(4);

    expect(list.find(5)).toBeNull();
    expect(list.find(2)).toBeTruthy();
    expect(list.find(2).data).toBe(2);
})

it("Should support iterable", () => {
    const list = createLinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.prepend(4);

    expect([...list]).toEqual([4, 1, 2, 3]);
});
