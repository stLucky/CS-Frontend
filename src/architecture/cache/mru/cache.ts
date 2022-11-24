import { Node } from '../../../data-structures/linked-list';
import LRUCache from '../lru';

export default class MRUCache<K, V> extends LRUCache<K, V> {
  override set(key: K, value: V): void {
    if (this.storage.size === this.capacity) {
      const value = this.list.pop();

      if (value != null) {
        this.storage.delete(value[0]);
      }
    }

    const node = new Node<[K, V]>([key, value]);
    this.list.unshift(node);

    this.storage.set(key, node);
  }
}
