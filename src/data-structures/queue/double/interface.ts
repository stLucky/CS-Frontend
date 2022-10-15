import type { ISimpleQueue } from '../simple';

export interface IDoubleQueue<T> extends ISimpleQueue<T> {
  get tail(): CanUndef<T>;

  unshift(value: T): number;
  pop(): T | null;
}
