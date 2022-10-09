import { IStructure } from './interface';

export default class Structure implements IStructure {
  #values: Array<unknown>;

  #getIndex: (key: string) => number;

  constructor(keys: Array<string>) {
    this.#values = new Array(keys.length);
    this.#getIndex = Structure.getHocKeys(keys);
  }

  set<T>(key: string, value: T) {
    this.#values[this.#getIndex(key)] = value;
  }

  get<T>(key: string): T {
    return this.#values[this.#getIndex(key)] as T;
  }

  static getHocKeys(keys: Array<string>) {
    return (key: string) => {
      const index = keys.findIndex((item) => item === key);
      if (index !== -1) {
        return index;
      }

      throw new ReferenceError(`Unknown key - ${key}`);
    };
  }
}
