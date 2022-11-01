import Worker from '../../worker';
import { DefaultTimes } from '../../worker/interface';
import { ITaskManager } from '../interface';

export default class SimpleTaskManager implements ITaskManager {
  #workers: Set<Worker<unknown>> = new Set();

  #delayTime: number;

  #execTime: number;

  constructor({ delay, exec } = { delay: DefaultTimes.DELAY, exec: DefaultTimes.EXEC }) {
    this.#delayTime = delay;
    this.#execTime = exec;
  }

  forEach<T, I extends Iterable<T> = Iterable<T>>(
    iterable: I,
    cb: (el: T, i: number, iterable: I) => void,
  ): Promise<unknown> {
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new TypeError('Object is not iterable');
    }

    if (typeof cb !== 'function') {
      throw new TypeError('Callback is not a function');
    }

    const workerOptions = {
      delay: this.#delayTime,
      exec: this.#execTime,
    };

    const worker = new Worker(iterable, cb, workerOptions);
    this.#workers.add(worker);

    this.#setExecTimeInWorkers(Math.round(this.#execTime / this.#workers.size));

    return new Promise((resolve, reject) => {
      worker.run(resolve, reject);
    }).finally(() => {
      this.#workers.delete(worker);
      this.#setExecTimeInWorkers(Math.round(this.#execTime / this.#workers.size));
    });
  }

  #setExecTimeInWorkers(time: number) {
    const iter = this.#workers.values();

    let res;

    do {
      res = iter.next();
      const worker = res.value;
      if (worker) {
        worker.recalculateExecTime(time);
      }
    } while (!res.done);

    // TODO: в этом цикле this.workers всегда нулевого размера?!
    // for (const worker of this.workers) {
    //   worker.recalculateExecTime(time);
    // }
  }
}
