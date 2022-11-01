export interface IResult<T> {
  catch<R>(cb: (err: Error) => R): IResult<R | NonNullable<T>>
  map<R>(cb: (data: T) => R): IResult<R>
  flatMap<R>(cb: (data: T) => IResult<R>): IResult<R>
}
