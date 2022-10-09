export interface IStack<T> {
  get head(): CanUndef<T>;
  push(value: T): void;
  pop(): T;
}
