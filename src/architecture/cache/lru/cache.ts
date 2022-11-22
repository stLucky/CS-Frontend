import LinkedList, { Node } from '../../../data-structures/linked-list';

export default class LRUCache<K, V> {
  #storage = new Map<K, Node<[K, V]>>();

  #list = new LinkedList<[K, V]>();

  #capacity: number;

  constructor(capacity: number = 20) {
    this.#capacity = capacity;
  }

  get(key: K): CanUndef<V> {
    let node: Node<[K, V]> | undefined;

    if (this.has(key)) {
      node = this.#storage.get(key) as Node<[K, V]>;

      this.#list.delete(node);
      this.#list.push(node);
    }

    return node?.value[1];
  }

  set(key: K, value: V): void {
    if (this.#storage.size === this.#capacity) {
      const value = this.#list.shift();

      if (value != null) {
        this.#storage.delete(value[0]);
      }
    }

    const node = new Node<[K, V]>([key, value]);
    this.#list.push(node);

    this.#storage.set(key, node);
  }

  has(key: K): boolean {
    return this.#storage.has(key);
  }

  delete(key: K): boolean {
    if (this.has(key)) {
      const node = this.#storage.get(key)!;

      this.#list.delete(node);
      return this.#storage.delete(key);
    }

    return false;
  }
}
