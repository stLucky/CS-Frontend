import { toError } from './helpers';
import { IResult } from './interface';

export default class Result<T> implements IResult<T> {
  #error?: Error;

  #data?: T;

  constructor(getData: () => T) {
    try {
      this.#data = getData();
    } catch (error) {
      this.#error = toError(error);
    }
  }

  map<R>(cb: (data: T) => R): Result<R> {
    return new Result(() => {
      if (this.#error != null) {
        throw this.#error;
      }

      return cb(this.#data!);
    });
  }

  flatMap<R>(cb: (data: T) => Result<R>): Result<R> {
    return cb(this.#data!).map((data) => data);
  }

  catch<R>(cb: (err: Error) => R): Result<R | NonNullable<T>> {
    return new Result(() => {
      if (this.#error != null) {
        return cb(this.#error);
      }

      return this.#data!;
    });
  }

  static ok<T>(data: T): Result<T> {
    return new Result(() => data);
  }

  static error(error: unknown): Result<undefined> {
    return new Result(() => {
      throw toError(error);
    });
  }
}
