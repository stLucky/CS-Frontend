export default class Node<T> {
  readonly value: T;

  next: Nullable<Node<T>> = null;

  prev: Nullable<Node<T>> = null;

  constructor(value: T) {
    this.value = value;
  }
}
