export interface ISimpleQueue<T> {
  get head(): CanUndef<T>;
  get length(): number;

  push(value: T): number;
  shift(): T | null;
}
