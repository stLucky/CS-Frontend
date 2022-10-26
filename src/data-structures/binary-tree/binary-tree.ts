import Node from './node';

export default class BinaryTree<T> {
  #root: Nullable<Node<T>> = null;

  constructor(values: Iterable<T>) {
    for (const value of values) {
      this.add(value);
    }
  }

  add(value: T): void {
    const node = new Node(value);

    if (this.#root == null) {
      this.#root = node;
      return;
    }

    let current: Nullable<Node<T>> = this.#root;

    while (true) {
      const parent = current as Node<T>;

      if (value < current!.value) {
        current = current!.leftChild;

        if (current == null) {
          parent.leftChild = node;
          return;
        }
      } else {
        current = current!.rightChild;
        if (current == null) {
          parent.rightChild = node;
          return;
        }
      }
    }
  }

  has(value: T): boolean {
    let current = this.#root;

    if (current == null) {
      return false;
    }

    while (current && current.value !== value) {
      if (value < current.value) {
        current = current.leftChild;
      } else {
        current = current.rightChild;
      }

      if (current == null) {
        return false;
      }
    }

    return true;
  }

  delete(value: T) {
    let current = this.#root;
    let parent = this.#root;

    let isLeftChild = true;

    if (current == null) {
      return false;
    }

    while (current && current.value !== value) {
      parent = current;

      if (value < current.value) {
        isLeftChild = true;
        current = current.leftChild;
      } else {
        isLeftChild = false;
        current = current.rightChild;
      }

      if (current == null) {
        return false;
      }
    }

    const setReferences = (node: Nullable<Node<T>>): void => {
      if (current === this.#root) {
        this.#root = node;
      } else if (isLeftChild) {
        parent!.leftChild = node;
      } else {
        parent!.rightChild = node;
      }
    };

    if (current.leftChild == null && current.rightChild == null) {
      setReferences(null);
    } else if (current.rightChild == null) {
      setReferences(current.leftChild);
    } else if (current.leftChild == null) {
      setReferences(current.rightChild);
    } else {
      const successor = this.#getSuccessor(current);

      setReferences(successor);
      successor.leftChild = current.leftChild;
    }

    return true;
  }

  minimum(): Nullable<Node<T>> {
    return this.#findBound('left');
  }

  maximum(): Nullable<Node<T>> {
    return this.#findBound('right');
  }

  [Symbol.iterator]() {
    return this.inOrder();
  }

  inOrder(): Generator<T> {
    return this.#genInOrder(this.#root);
  }

  preOrder(): Generator<T> {
    return this.#genPreOrder(this.#root);
  }

  postOrder(): Generator<T> {
    return this.#genPostOrder(this.#root);
  }

  #getSuccessor(delNode: Node<T>): Node<T> {
    let successorParent = delNode;
    let successor = delNode;
    let current = delNode.rightChild;

    while (current != null) {
      successorParent = successor;
      successor = current;
      current = current.leftChild;
    }

    if (successor !== delNode.rightChild) {
      successorParent.leftChild = successor.rightChild;
      successor.rightChild = delNode.rightChild;
    }

    return successor;
  }

  * #genInOrder(node: Nullable<Node<T>>): Generator<T> {
    if (node == null) return;

    yield* this.#genInOrder(node.leftChild);

    yield node.value;

    yield* this.#genInOrder(node.rightChild);
  }

  * #genPostOrder(node: Nullable<Node<T>>): Generator<T> {
    if (node == null) return;

    yield* this.#genPostOrder(node.leftChild);

    yield* this.#genPostOrder(node.rightChild);

    yield node.value;
  }

  * #genPreOrder(node: Nullable<Node<T>>): Generator<T> {
    if (node == null) return;

    yield node.value;

    yield* this.#genPreOrder(node.leftChild);

    yield* this.#genPreOrder(node.rightChild);
  }

  #findBound(direction: 'left' | 'right') {
    let current = this.#root;

    if (current == null) {
      return null;
    }

    let last;

    while (current != null) {
      last = current;
      current = current[`${direction}Child`];
    }

    return last;
  }
}
