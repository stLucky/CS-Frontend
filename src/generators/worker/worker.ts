import { DefaultTimes, IWorker } from './interface';
import SimpleWorker from './simple-worker';

export default class Worker<T, I extends Iterable<T> = Iterable<T>>
  extends SimpleWorker<T, I>
  implements IWorker {
  #delayTime: number;

  constructor(
    iterable: I,
    cb: (el: T, i: number, iterable: I) => void,
    { delay, exec } = { delay: DefaultTimes.DELAY, exec: DefaultTimes.EXEC },
  ) {
    super(iterable, cb, { exec });

    this.#delayTime = delay;
  }

  run(resolve: (v?: any) => void, reject: (r?: any) => void): void {
    const { value, done } = this.executor.next();

    if (done) return resolve(value);

    if (value instanceof Error) return reject(value);

    setTimeout(() => {
      this.run(resolve, reject);
    }, this.#delayTime);
  }
}
