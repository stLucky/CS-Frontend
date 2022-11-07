import type { Immediate, Task } from './interface';

export function setImmediate<T extends any[]>(cb: (...args: T) => void, ...args: T): Immediate {
  const key: Immediate = {};

  const task = () => {
    cb(...args);
  };

  tasks.set(key, task);

  queueMicrotask(() => {
    const task = tasks.get(key);
    if (task) {
      task();
    }
  });

  return key;
}

export function clearImmediate(key: Immediate) {
  tasks.delete(key);
}

const tasks = new Map<Immediate, Task<unknown[]>>();
