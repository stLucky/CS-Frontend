import LinkedList from '../../linked-list';

import type { IDynamicArray } from './interface';

export default class DynamicArray<T> implements IDynamicArray<T> {
  #list: LinkedList<T[]>;

  #length = 0;

  #capacity: number;

  constructor(capacity = 3) {
    this.#capacity = capacity;

    this.#list = new LinkedList();
  }

  get length() {
    return this.#length;
  }

  add(value: T) {
    if (this.#list.isEmpty || this.#isLimit) {
      this.#addItem();
    }

    this.#list.last![this.#cursor] = value;
    this.#length += 1;

    return this.#length;
  }

  get(index: number) {
    if (index > this.#length - 1 || index < 0) {
      return null;
    }

    const countArr = Math.floor(index / this.#capacity);
    let count = 0;

    for (const arr of this.#list) {
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
    this.#list.push(Array(this.#capacity));
  }

  * [Symbol.iterator]() {
    for (const arr of this.#list) {
      for (const value of arr) {
        if (value != null) {
          yield value;
        }
      }
    }
  }
}
