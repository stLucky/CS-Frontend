import type { IDynamicArray } from '../interface';

export default class VectorDynamicArray<T> implements IDynamicArray<T> {
  #capacity: number;

  #length = 0;

  #buffer: Array<T>;

  constructor(capacity = 3) {
    this.#capacity = capacity;

    this.#buffer = Array(capacity);
  }

  get length() {
    return this.#length;
  }

  add(value: T) {
    if (this.#capacity === this.#length) {
      this.#increaseBuffer();
    }

    this.#buffer[this.#length] = value;
    this.#length += 1;

    return this.#length;
  }

  get(index: number) {
    if (index > this.#length - 1 || index < 0 || typeof index !== 'number') {
      return null;
    }

    return this.#buffer[index];
  }

  #increaseBuffer() {
    const SCALING_FACTOR = 2;

    const newBuffer = Array(this.#capacity * SCALING_FACTOR);

    for (let i = 0; i < this.#buffer.length; i += 1) {
      newBuffer[i] = this.#buffer[i];
    }

    this.#buffer = newBuffer;
  }

  * [Symbol.iterator]() {
    for (const val of this.#buffer) {
      if (val != null) {
        yield val;
      }
    }
  }
}
