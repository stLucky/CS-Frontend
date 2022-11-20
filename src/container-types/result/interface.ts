export interface IResult<T> {
  catch<R>(cb: FunctorExecutor<Error, R>): IResult<T | R>
  map<R>(cb: FunctorExecutor<T, R>): IResult<R>
  flatMap<R>(cb: MonadExecutor<T, R>): IResult<R>
}

export type Data<T> = T | IResult<T>;

export type Executor<T> = () => Data<T>;
export type FunctorExecutor<A, R> = (el: A) => R;
export type MonadExecutor<A, R> = (el: A) => IResult<R>;
