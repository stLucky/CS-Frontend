export default class PriorityQueue<T> {
  #items: T[] = [];

  get isEmpty(): boolean {
    return this.#items.length === 0;
  }

  insert(item: T, predicate: (item: T) => boolean): void {
    if (this.isEmpty) {
      this.#items[0] = item;
    } else {
      let i;

      for (i = this.#items.length - 1; i >= 0; i--) {
        if (predicate(this.#items[i])) {
          this.#items[i + 1] = this.#items[i];
        } else {
          break;
        }
      }

      this.#items[i + 1] = item;
    }
  }

  remove(): CanUndef<T> {
    return this.#items.shift();
  }
}
