export default interface ICache<K, V> {
  get(key: K): CanUndef<V>
  set(key: K, value: V): void
  has(key: K): boolean
  delete(key: K): boolean
}
