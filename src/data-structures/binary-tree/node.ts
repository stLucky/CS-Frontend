export default class Node<T> {
  value: T;

  leftChild: Nullable<Node<T>> = null;

  rightChild: Nullable<Node<T>> = null;

  constructor(value: T) {
    this.value = value;
  }
}
