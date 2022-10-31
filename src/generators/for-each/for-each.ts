import Worker, { WorkerStatuses } from '../worker';
import type { WorkerResult } from '../worker';

export default function forEach<T, I extends Iterable<T> = Iterable<T>>(
  iterable: I,
  cb: (el: T, i: number, iterable: I) => void,
): Promise<WorkerResult['payload']> {
  if (typeof iterable[Symbol.iterator] !== 'function') {
    throw new TypeError('Object is not iterable');
  }

  if (typeof cb !== 'function') {
    throw new TypeError('Callback is not a function');
  }

  return new Promise((resolve, reject) => {
    const worker = new Worker(iterable, cb);
    const res = worker.run();

    if (res.status === WorkerStatuses.DONE) {
      resolve(res.payload);
    }

    if (res.status === WorkerStatuses.ERROR) {
      reject(res.payload);
    }
  });
}
