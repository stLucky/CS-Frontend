import { DefaultTimes } from './interface';

export default class SimpleWorker<T, I extends Iterable<T> = Iterable<T>> {
  #execTime: number;

  executor: Generator<number | Error>;

  constructor(
    iterable: I,
    cb: (el: T, i: number, iterable: I) => void,
    { exec } = { exec: DefaultTimes.EXEC },
  ) {
    this.executor = this.#createExecutor(iterable, cb);
    this.#execTime = exec;
  }

  recalculateExecTime(time: number): void {
    this.#execTime = time;
  }

  * #createExecutor(
    iterable: I,
    cb: (el: T, i: number, iterable: I) => void,
  ): Generator<number | Error> {
    let start = Date.now();
    let i = 0;

    for (const el of iterable) {
      try {
        cb(el, i++, iterable);
      } catch (err) {
        if (err instanceof Error) {
          yield err;
        }
      }

      if (Date.now() - start > this.#execTime) {
        yield i;
        start = Date.now();
      }
    }
  }
}
