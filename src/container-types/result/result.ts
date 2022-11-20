import { cast } from '../../helpers';
import { toError } from './helpers';
import type {
  IResult,
  Data,
  Executor,
  FunctorExecutor,
  MonadExecutor,
} from './interface';

export default class Result<T> implements IResult<T> {
  #error?: Error;

  #data?: T;

  constructor(getData: Executor<T>, isUnpack = true) {
    try {
      const res = getData();

      if (isUnpack) {
        this.#data = res instanceof Result ? res.#unwrap() : res;
      } else {
        this.#data = cast(res);
      }
    } catch (error) {
      this.#error = toError(error);
    }
  }

  map<R>(cb: FunctorExecutor<T, R>): Result<R> {
    if (this.#error != null) {
      return Result.error(this.#error);
    }

    return new Result(() => cb(this.#data!), false);
  }

  flatMap<R>(cb: MonadExecutor<T, R>): Result<R> {
    if (this.#error != null) {
      return Result.error(this.#error);
    }

    return new Result(() => cb(this.#data!));
  }

  catch<R>(cb: FunctorExecutor<Error, R>): Result<T | R> {
    if (this.#error != null) {
      return new Result(() => cb(this.#error!));
    }

    return Result.ok(this.#data!);
  }

  static ok<T>(data: Data<T>): Result<T> {
    return new Result(() => data);
  }

  static error<T>(error: unknown): Result<T> {
    return new Result(() => {
      throw toError(error);
    });
  }

  #unwrap() {
    if (this.#error != null) {
      throw this.#error;
    }

    return this.#data!;
  }
}
