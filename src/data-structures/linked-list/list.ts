import Node from './node';

export default class LinkedList<T> {
  #firstNode: Nullable<Node<T>> = null;

  #lastNode: Nullable<Node<T>> = null;

  #lengthStore: number = 0;

  get first(): CanUndef<T> {
    return this.#firstNode?.value;
  }

  get last(): CanUndef<T> {
    return this.#lastNode?.value;
  }

  get length() {
    return this.#lengthStore;
  }

  isEmpty() {
    return this.#firstNode == null;
  }

  push(value: T) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.#firstNode = node;
    }

    if (this.#lastNode != null) {
      this.#lastNode!.next = node;
    }

    node.prev = this.#lastNode;
    this.#lastNode = node;
    this.#lengthStore += 1;

    return this.#lengthStore;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.#firstNode === this.#lastNode) {
      this.#firstNode = null;
    }

    const last = this.#lastNode;
    this.#lastNode = this.#lastNode!.prev;

    if (this.#lastNode) {
      this.#lastNode.next = null;
    }
    this.#lengthStore -= 1;

    return last!.value;
  }

  shift() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.#firstNode === this.#lastNode) {
      this.#lastNode = null;
    }

    const first = this.#firstNode;
    this.#firstNode = this.#firstNode!.next;

    if (this.#firstNode) {
      this.#firstNode!.prev = null;
    }

    this.#lengthStore -= 1;

    return first!.value;
  }

  unshift(value: T) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.#lastNode = node;
    } else {
      this.#firstNode!.prev = node;
      node.next = this.#firstNode;
    }

    this.#firstNode = node;
    this.#lengthStore += 1;

    return this.#lengthStore;
  }

  * #values(isReverse = false) {
    let current = isReverse ? this.#lastNode : this.#firstNode;

    while (current) {
      yield current.value;
      current = isReverse ? current.prev : current.next;
    }
  }

  reversed() {
    return {
      [Symbol.iterator]: () => this.#values(true),
    };
  }

  [Symbol.iterator]() {
    return this.#values();
  }
}
