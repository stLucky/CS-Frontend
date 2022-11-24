import ICache from '../interface';

export default class NeverCache<K, V> implements ICache<K, V> {
  get(key: K): undefined {
    return undefined;
  }

  set(key: K, value: V): void {}

  has(key: K): boolean {
    return false;
  }

  delete(key: K): boolean {
    return false;
  }
}
