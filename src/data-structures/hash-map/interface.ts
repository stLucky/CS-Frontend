export interface IHashMap {
  set(key: unknown, val: unknown): void;
  get(key: unknown): unknown | null;
  entries(): Generator<[string, unknown], void, unknown>;
  values(): Generator<unknown, void, unknown>;
  keys(): Generator<string, void, unknown>;
  [Symbol.iterator](): IterableIterator<[string, unknown]>
}
