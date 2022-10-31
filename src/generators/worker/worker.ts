import { DefaultTimes, WorkerStatuses, WorkerResult } from './interface';

export default class Worker<T, I extends Iterable<T>> {
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

  run(): WorkerResult {
    const { value, done } = this.#executor.next();
    const res = {
      status: WorkerStatuses.CONTINUE,
      payload: value,
    };

    if (done) {
      res.status = WorkerStatuses.DONE;
      return res;
    }

    if (value instanceof Error) {
      res.status = WorkerStatuses.ERROR;
      return res;
    }

    setTimeout(() => {
      this.run();
    }, this.#delayTime);

    return res;
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
