import { DefaultTimes, IWorker } from './interface';

export default class Worker<T, I extends Iterable<T> = Iterable<T>> implements IWorker {
  #execTime: number;

  #delayTime: number;

  #executor: Generator<number | Error>;

  constructor(
    iterable: I,
    cb: (el: T, i: number, iterable: I) => void,
    { delay, exec } = { delay: DefaultTimes.DELAY, exec: DefaultTimes.EXEC },
  ) {
    this.#executor = this.#createExecutor(iterable, cb);
    this.#execTime = exec;
    this.#delayTime = delay;
  }

  recalculateExecTime(time: number): void {
    this.#execTime = time;
  }

  run(resolve: (v?: any) => void, reject: (r?: any) => void): void {
    const { value, done } = this.#executor.next();

    if (done) return resolve(value);

    if (value instanceof Error) return reject(value);

    setTimeout(() => {
      this.run(resolve, reject);
    }, this.#delayTime);
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
