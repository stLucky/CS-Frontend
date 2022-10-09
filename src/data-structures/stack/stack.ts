import type { IStack } from './interface';

export default class Stack<T> implements IStack<T> {
  #limit: number;

  #stack: Array<T>;

  #cursor: number = 0;

  get head(): CanUndef<T> {
    return this.#stack[this.#cursor];
  }

  constructor(limit: number = 0) {
    this.#limit = limit;
    this.#stack = new Array<T>(limit);
  }

  push(value: T) {
    if (this.#cursor === this.#limit) {
      throw new Error('Stack overflow');
    }

    this.#cursor += 1;
    this.#stack[this.#cursor] = value;
  }

  pop() {
    if (this.#cursor === 0) {
      throw new Error('Stack empty');
    }

    const current = this.#stack[this.#cursor];
    delete this.#stack[this.#cursor];
    this.#cursor -= 1;

    return current;
  }
}
