import SimpleQueue from '../simple';
import type { DoubleQueue } from '../interface';

export default class Queue<T> extends SimpleQueue<T> implements DoubleQueue<T> {
  get tail() {
    return this.list.last;
  }

  unshift(value: T) {
    return this.list.unshift(value);
  }

  pop() {
    if (this.list.first == null) {
      throw new Error('Queue is empty');
    }

    return this.list.pop();
  }
}