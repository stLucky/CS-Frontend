export interface IListDynamicArray<T> {
  get length(): number;

  add(value: T): number;
  get(index: number): T | null;
}
