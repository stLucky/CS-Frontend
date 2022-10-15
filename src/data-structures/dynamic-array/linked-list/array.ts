import LinkedList from '../../linked-list';

import type { IDynamicArray } from '../interface';

export default class ListDynamicArray<T> implements IDynamicArray<T> {
  #capacity: number;

  #length = 0;

  #buffer: LinkedList<T[]>;

  constructor(capacity = 3) {
    this.#capacity = capacity;

    this.#buffer = new LinkedList();
  }

  get length() {
    return this.#length;
  }

  add(value: T) {
    if (this.#buffer.isEmpty || this.#isLimit) {
      this.#addItem();
    }

    this.#buffer.last![this.#cursor] = value;
    this.#length += 1;

    return this.#length;
  }

  get(index: number) {
    if (index > this.#length - 1 || index < 0) {
      return null;
    }

    const countArr = Math.floor(index / this.#capacity);
    let count = 0;

    for (const arr of this.#buffer) {
      if (count === countArr) {
        return arr[index % this.#capacity];
      }

      count += 1;
    }

    return null;
  }

  // определяет что текущий массив заполнен максимальной вместимостью
  get #isLimit() {
    return !!this.#length && this.#length % this.#capacity === 0;
  }

  // определяет положение индекса записываемого элемента в массив
  get #cursor() {
    return this.#length % this.#capacity;
  }

  // добавляет новый элемент связанного списка
  #addItem() {
    this.#buffer.push(Array(this.#capacity));
  }

  * [Symbol.iterator]() {
    for (const arr of this.#buffer) {
      for (const value of arr) {
        if (value != null) {
          yield value;
        }
      }
    }
  }
}
