import Worker from '../worker';

export default function forEach<T, I extends Iterable<T> = Iterable<T>>(
  iterable: I,
  cb: (el: T, i: number, iterable: I) => void,
): Promise<void> {
  if (typeof iterable[Symbol.iterator] !== 'function') {
    throw new TypeError('Object is not iterable');
  }

  if (typeof cb !== 'function') {
    throw new TypeError('Callback is not a function');
  }

  return new Promise((resolve, reject) => {
    const worker = new Worker(iterable, cb);
    worker.run(resolve, reject);
  });
}
