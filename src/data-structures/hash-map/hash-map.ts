import LinkedList from '../linked-list';
import { IHashMap } from './interface';

export default class HashMap implements IHashMap {
  #vector: Array<LinkedList<[string, unknown]>>;

  #capacity: number;

  #maxFillinRatio = 1;

  // счетчик, определяет сколько записей было сделано.
  // Нужен чтобы обеспечить равномерное заполнение внутреннего вектора и не создавать длинные списки
  #count = 0;

  constructor(capacity = 3) {
    this.#capacity = capacity;
    this.#vector = Array(capacity);
  }

  set(key: unknown, val: unknown) {
    if (this.#fillingRatio >= this.#maxFillinRatio) {
      this.#rehashing();
    }

    this.#count += 1;

    const list = this.#vector[this.#getHash(key)];

    if (!list) {
      const newList = new LinkedList<[string, unknown]>();
      newList.push([String(key), val]);

      this.#vector[this.#getHash(key)] = newList;
      return;
    }

    for (const item of list.nodes()) {
      if (item.value[0] === String(key)) {
        item.value[1] = val;
        this.#count -= 1;
        return;
      }
    }

    list.push([String(key), val]);
  }

  get(key: unknown) {
    const list = this.#vector[this.#getHash(key)];

    if (list == null) return null;

    for (const val of list) {
      if (val[0] === String(key)) {
        return val[1];
      }
    }

    return null;
  }

  * entries() {
    for (const list of this.#vector) {
      if (list) {
        for (const item of list) {
          yield item;
        }
      }
    }
  }

  * keys() {
    for (const [key] of this) {
      yield key;
    }
  }

  * values() {
    for (const [, val] of this) {
      yield val;
    }
  }

  [Symbol.iterator]() {
    return this.entries();
  }

  get #fillingRatio() {
    return this.#count / this.#capacity;
  }

  #getHash(key: unknown) {
    const LETTER_COUNT = 27;
    return [...String(key)].reduce(
      (sum, char) => {
        sum += (sum * LETTER_COUNT + (char.codePointAt(0) ?? 1)) % this.#capacity;
        return sum;
      },
      0,
    );
  }

  #rehashing() {
    const oldVector = this.#vector;

    // TODO: тут вместо 2 должно быть число, которое  в итоге будет давать простое число
    this.#capacity *= 2;
    this.#vector = Array(this.#capacity);

    for (const list of oldVector) {
      if (list != null) {
        for (const [key, val] of list) {
          this.set(key, val);
        }
      }
    }
  }
}
