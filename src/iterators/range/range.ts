import { Value } from './interface';

export default class Range<T extends Value> {
  #from: number;

  #to: number;

  #isNumber: boolean;

  constructor(from: T, to: T) {
    this.#isNumber = typeof from === 'number';
    this.#from = validate(from);
    this.#to = validate(to);
  }

  [Symbol.iterator]() {
    return this.#values();
  }

  reverse() {
    return this.#values(true);
  }

  #values(isReverse = false): IterableIterator<T> {
    let cursor = isReverse ? this.#to : this.#from;

    return {
      [Symbol.iterator]() {
        return this;
      },
      // @ts-ignore
      next: () => {
        const changeCursor = () => (isReverse ? cursor-- : cursor++);

        return {
          done: isReverse ? cursor < this.#from : cursor > this.#to,
          value: this.#isNumber ? changeCursor() : String.fromCodePoint(changeCursor()),
        };
      },
    };
  }
}

function validate<T extends Value>(value: T): number {
  if (value == null) {
    throw new Error('value is required');
  }

  if (typeof value === 'string') {
    if (value.length > 1) {
      throw new Error('should has one character');
    }

    const code = value.codePointAt(0);

    if (code == null) {
      throw new Error('unicode code not found');
    }
    return code;
  }

  return value;
}
