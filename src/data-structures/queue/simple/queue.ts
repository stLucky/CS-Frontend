import LinkedList from '../../linked-list';

import type { ISimpleQueue } from './interface';

export default class SimpleQueue<T> implements ISimpleQueue<T> {
  protected list: LinkedList<T>;

  constructor() {
    this.list = new LinkedList();
  }

  get head(): CanUndef<T> {
    return this.list.first;
  }

  get length() {
    return this.list.length;
  }

  push(value: T) {
    return this.list.push(value);
  }

  shift() {
    if (this.list.first == null) {
      throw new Error('Queue is empty');
    }

    return this.list.shift();
  }
}
