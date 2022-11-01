export interface ITaskManager {
  forEach<T, I extends Iterable<T> = Iterable<T>>(
    iterable: I,
    cb: (el: T, i: number, iterable: I) => void,
  ): Promise<unknown>
}
