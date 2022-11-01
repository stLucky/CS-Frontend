import PriorityQueue from './priority-queue';
import { SimpleWorker } from '../../worker';
import { DefaultTimes } from '../../worker/interface';
import { ForEachOptions, Task } from './interface';
import { ITaskManager } from '../interface';
import { ExecTimePriorities } from './const';

export default class PriorityTaskManager implements ITaskManager {
  #tasks: Set<Task> = new Set();

  #queue: PriorityQueue<Task> = new PriorityQueue();

  #delayTime: number;

  #execTime: number;

  #isRuned: boolean = false;

  constructor(
    { delay, exec } = { delay: DefaultTimes.DELAY, exec: DefaultTimes.EXEC },
  ) {
    this.#delayTime = delay;
    this.#execTime = exec;
  }

  forEach<T, I extends Iterable<T> = Iterable<T>>(
    iterable: I,
    cb: (el: T, i: number, iterable: I) => void,
    { priority }: ForEachOptions = { priority: 'average' },
  ): Promise<unknown> {
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new TypeError('Object is not iterable');
    }

    if (typeof cb !== 'function') {
      throw new TypeError('Callback is not a function');
    }

    const workerOptions = {
      exec: this.#execTime,
    };

    const worker = new SimpleWorker(iterable, cb, workerOptions);

    return new Promise((resolve, reject) => {
      this.#tasks.add({
        worker,
        priority,
        resolve,
        reject,
      });

      if (!this.#isRuned) {
        this.#isRuned = true;
        setTimeout(() => {
          this.#run();
        });
      }
    });
  }

  #run() {
    this.#setTick();

    let task = this.#queue.remove();

    while (task) {
      const { value, done } = task.worker.executor.next();

      if (done) {
        this.#tasks.delete(task);
        task.resolve();
      }

      if (value instanceof Error) {
        task.reject(value);
      }

      task = this.#queue.remove();
    }

    setTimeout(() => {
      if (this.#tasks.size) {
        this.#run();
      } else {
        this.#isRuned = false;
      }
    }, this.#delayTime);
  }

  #setTick() {
    // TODO: this.#tasks всегда нулевого размера, если не обернуть в Array.from?!
    for (const task of Array.from(this.#tasks)) {
      task.worker.recalculateExecTime(this.#averageExecTime * ExecTimePriorities[task.priority]);

      this.#queue.insert(
        task,
        (queueTask) => ExecTimePriorities[task.priority]
          > ExecTimePriorities[queueTask.priority],
      );
    }
  }

  get #averageExecTime() {
    const sumExecTimeRatio = Array.from(this.#tasks).reduce(
      (res, task) => {
        res += ExecTimePriorities[task.priority];
        return res;
      },
      0,
    );

    return this.#execTime / sumExecTimeRatio;
  }
}
