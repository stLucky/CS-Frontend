export interface SimpleQueue<T> {
  get head(): CanUndef<T>;
  get length(): number;

  push(value: T): number;
  shift(): T | null;
}

export interface DoubleQueue<T> extends SimpleQueue<T> {
  get tail(): CanUndef<T>;

  unshift(value: T): number;
  pop(): T | null;
}
